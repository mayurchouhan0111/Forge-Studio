import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

interface CustomSpeechRecognition extends SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
}

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);

  const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
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
    <motion.div
      className="fixed bottom-24 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <motion.button
        onClick={toggleListening}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isListening 
            ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-red-500/50' 
            : 'bg-gradient-to-br from-purple-600 to-cyan-600 shadow-purple-500/50'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isListening ? { scale: [1, 1.1, 1] } : {}}
        transition={isListening ? { duration: 1, repeat: Infinity } : {}}
      >
        <Mic className="w-6 h-6 text-white" />
      </motion.button>
      {error && (
        <div className="absolute bottom-16 right-0 bg-red-500/20 border border-red-500/30 rounded-lg p-2 text-xs text-red-400 max-w-xs">
          {error}
        </div>
      )}
    </motion.div>
  );
};

export default VoiceAssistant;
