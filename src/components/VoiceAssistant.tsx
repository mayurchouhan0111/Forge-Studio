
import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

// Define the interface for the SpeechRecognition API, accounting for browser prefixes
interface CustomSpeechRecognition extends SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
}

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Check for browser support and get the correct SpeechRecognition object
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition: CustomSpeechRecognition | null = null;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition() as CustomSpeechRecognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
  }

  useEffect(() => {
    if (!recognition) {
      setError("Your browser doesn't support the Web Speech API. Try Chrome or Edge.");
      return;
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const currentTranscript = event.results[0][0].transcript;
      setTranscript(currentTranscript);
      handleResponse(currentTranscript);
      setIsListening(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [recognition]);

  const handleResponse = async (text: string) => {
    try {
      const res = await fetch('http://localhost:3003/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: text }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      const aiResponse = data.answer;
      speak(aiResponse);

    } catch (err) {
      const errorMessage = 'Sorry, I am having trouble connecting to my brain. Please try again later.';
      setError(errorMessage);
      speak(errorMessage);
    }
  };

  const speak = (text: string) => {
    if (!window.speechSynthesis) {
      setError("Your browser doesn't support speech synthesis.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
    } else {
      setTranscript('');
      setError(null);
      recognition.start();
    }
    setIsListening(!isListening);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={toggleListening}
        className={`p-4 rounded-full text-white shadow-lg transition-transform transform hover:scale-110 ${
          isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-500'
        }`}
        aria-label="Activate voice assistant"
      >
        <Mic size={24} />
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default VoiceAssistant;
