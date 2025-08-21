require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');

const app = express();
const PORT = 3003;

app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- Agency Knowledge Base ---
const agencyData = {
  name: "Forge Studio",
  description: "We are a team of passionate designers and developers dedicated to creating stunning and functional websites. Our mission is to help businesses succeed online through innovative design and cutting-edge technology.",
  services: [
    "Web Development",
    "UI/UX Design",
    "SEO Optimization",
    "Mobile Apps",
    "Backend Systems",
    "Security & Performance"
  ],
  contact: {
    email: "mayurchouhan8055@gmail.com",
    phone: "+916263850508",
    primaryMethod: "the contact form on our website"
  }
};

const getNormalResponse = (question) => {
  const q = question.toLowerCase();
  if (q.includes('service')) {
    return `We offer the following services: ${agencyData.services.join(', ')}.`;
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone')) {
    return `You can contact us by email at ${agencyData.contact.email}, by phone at ${agencyData.contact.phone}, or by using the ${agencyData.contact.primaryMethod}.`;
  }
  if (q.includes('name')) {
    return `Our name is ${agencyData.name}.`;
  }
  if (q.includes('description') || q.includes('about')) {
      return agencyData.description;
  }
  return "I can't answer that question right now. Please try rephrasing it, or ask something else about our services or contact information.";
};

/**
 * Calls the Gemini AI to get a response, providing agency-specific context.
 * @param {string} question The user's question.
 * @returns {string} The AI's response.
 */
const getAIResponse = async (question) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});

    const fullPrompt = `You are a helpful assistant for Forge Studio. Forge Studio is a team of passionate designers and developers dedicated to creating stunning and functional websites. Their mission is to help businesses succeed online through innovative design and cutting-edge technology. They offer Web Development, UI/UX Design, SEO Optimization, Mobile Apps, Backend Systems, and Security & Performance services. You can contact them via their contact form on their website, email at ${agencyData.contact.email}, or phone at ${agencyData.contact.phone}.

User's question: ${question}`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini AI:', error);
    return getNormalResponse(question);
  }
};

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'No question provided' });
  }

  const answer = await getAIResponse(question);
  res.json({ answer });
});

app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbwSu1q5PckfTOmF29-fWYCEaa0r_TSM1BCk27f2vgKJ21XjZH2r35ViiQL6sT-0-4rm/exec';

    console.log('Submitting form data to Google Sheet:', formData);

    const response = await axios({
      method: 'post',
      url: googleAppScriptUrl,
      data: new URLSearchParams(formData).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log('Response from Google Sheet:', response.status, response.data);
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error('Error submitting form:', error.message);
    if (error.response) {
      console.error('Error response from Google Sheet:', error.response.status, error.response.data);
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).json({ error: 'Error submitting form' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});