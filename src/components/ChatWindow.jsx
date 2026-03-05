import React, { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { BotFace, TypingDots } from "./AnimatedEmoticons";

function ChatWindow({ messages, isTyping }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    return (
        <div className="chat-window">
            <div className="messages-container">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}

                {isTyping && (
                    <div className="message-row bot">
                        <div className="avatar bot-avatar">
                            <BotFace size={34} />
                        </div>
                        <div className="message-bubble bot-bubble typing-bubble">
                            <TypingDots />
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>
        </div>
    );
}

export default ChatWindow;
