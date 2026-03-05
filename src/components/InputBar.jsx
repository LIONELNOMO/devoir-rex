import React, { useState } from "react";
import { SendIcon } from "./AnimatedEmoticons";

function InputBar({ onSend }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        onSend(input.trim());
        setInput("");
    };

    return (
        <form className="input-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                className="chat-input"
                placeholder="Pose-moi une question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
            />
            <button type="submit" className="send-button" disabled={!input.trim()}>
                <SendIcon size={20} />
            </button>
        </form>
    );
}

export default InputBar;
