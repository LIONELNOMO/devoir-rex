import React from "react";
import { BotFace, UserFace } from "./AnimatedEmoticons";

function MessageBubble({ message }) {
    const isBot = message.sender === "bot";

    return (
        <div className={`message-row ${isBot ? "bot" : "user"}`}>
            {isBot && (
                <div className="avatar bot-avatar">
                    <BotFace size={34} />
                </div>
            )}
            <div className={`message-bubble ${isBot ? "bot-bubble" : "user-bubble"}`}>
                <p className="message-text">{message.text}</p>
                <span className="message-time">{message.time}</span>
            </div>
            {!isBot && (
                <div className="avatar user-avatar">
                    <UserFace size={34} />
                </div>
            )}
        </div>
    );
}

export default MessageBubble;
