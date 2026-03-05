import React from "react";

function SuggestionChips({ onSelect }) {
    const suggestions = [
        "Quelle est la capitale de la France ?",
        "Combien de planetes dans le systeme solaire ?",
        "Qui a peint la Joconde ?",
        "Quel est l'animal le plus rapide ?",
        "Qu'est-ce que l'intelligence artificielle ?",
    ];

    return (
        <div className="suggestions-container">
            <p className="suggestions-label">Suggestions :</p>
            <div className="suggestions-list">
                {suggestions.map((text, index) => (
                    <button
                        key={index}
                        className="suggestion-chip"
                        onClick={() => onSelect(text)}
                        style={{ animationDelay: `${index * 0.08}s` }}
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SuggestionChips;
