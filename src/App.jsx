import React, { useState, useCallback } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBar from "./components/InputBar";
import SuggestionChips from "./components/SuggestionChips";
import { BotFace, SparkleIcon } from "./components/AnimatedEmoticons";
import { findBestAnswer, getWelcomeMessage } from "./utils/chatLogic";

function getTime() {
  return new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: getWelcomeMessage(),
      sender: "bot",
      time: getTime(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSend = useCallback((text) => {
    const userMsg = {
      id: Date.now(),
      text,
      sender: "user",
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const botResponse = findBestAnswer(text);
      const botMsg = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        time: getTime(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 800 + Math.random() * 600);
  }, []);

  return (
    <div className="app">
      {/* Animated background mesh */}
      <div className="bg-mesh"></div>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="chat-container">
        <header className="chat-header">
          <div className="header-avatar-wrapper">
            <BotFace size={46} />
            <span className="online-ring"></span>
          </div>
          <div className="header-info">
            <div className="header-title-row">
              <h1>ChatBot Rex</h1>
              <SparkleIcon size={18} />
            </div>
            <span className="status-indicator">
              <span className="status-dot"></span>
              En ligne — 100 questions
            </span>
          </div>
        </header>

        <ChatWindow messages={messages} isTyping={isTyping} />

        {showSuggestions && <SuggestionChips onSelect={handleSend} />}

        <InputBar onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
