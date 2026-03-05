import React from "react";

/**
 * Animated Bot Face — replaces emoji with a fully animated SVG face
 */
export function BotFace({ size = 40 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="animated-emoticon bot-face"
        >
            {/* Head */}
            <circle cx="50" cy="50" r="45" fill="url(#botGrad)" stroke="#0ea5e9" strokeWidth="2">
                <animate attributeName="r" values="44;46;44" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Gradient */}
            <defs>
                <linearGradient id="botGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="eyeShine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#86efac" />
                </linearGradient>
            </defs>

            {/* Left Eye */}
            <ellipse cx="35" cy="40" rx="8" ry="9" fill="#1a1a2e">
                <animate attributeName="ry" values="9;1;9" dur="4s" begin="0s" repeatCount="indefinite" keyTimes="0;0.05;0.1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
            </ellipse>
            <circle cx="33" cy="37" r="3" fill="url(#eyeShine)" opacity="0.8">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Right Eye */}
            <ellipse cx="65" cy="40" rx="8" ry="9" fill="#1a1a2e">
                <animate attributeName="ry" values="9;1;9" dur="4s" begin="0s" repeatCount="indefinite" keyTimes="0;0.05;0.1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" calcMode="spline" />
            </ellipse>
            <circle cx="63" cy="37" r="3" fill="url(#eyeShine)" opacity="0.8">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Smile */}
            <path d="M 30 58 Q 50 78 70 58" fill="none" stroke="#1a1a2e" strokeWidth="3.5" strokeLinecap="round">
                <animate attributeName="d" values="M 30 58 Q 50 78 70 58;M 30 60 Q 50 74 70 60;M 30 58 Q 50 78 70 58" dur="3s" repeatCount="indefinite" />
            </path>

            {/* Antenna */}
            <line x1="50" y1="5" x2="50" y2="15" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round">
                <animate attributeName="y1" values="5;3;5" dur="2s" repeatCount="indefinite" />
            </line>
            <circle cx="50" cy="4" r="4" fill="#eab308">
                <animate attributeName="cy" values="4;2;4" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
}

/**
 * User Avatar — animated person silhouette
 */
export function UserFace({ size = 40 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="animated-emoticon user-face"
        >
            <defs>
                <linearGradient id="userGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
            </defs>

            {/* Background */}
            <circle cx="50" cy="50" r="45" fill="url(#userGrad)" stroke="#22c55e" strokeWidth="2">
                <animate attributeName="r" values="44;45.5;44" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* Head */}
            <circle cx="50" cy="36" r="16" fill="#ecfdf5">
                <animate attributeName="cy" values="36;35;36" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Body */}
            <path d="M 20 82 Q 20 58 50 58 Q 80 58 80 82" fill="#ecfdf5">
                <animate attributeName="d" values="M 20 82 Q 20 58 50 58 Q 80 58 80 82;M 20 82 Q 20 57 50 57 Q 80 57 80 82;M 20 82 Q 20 58 50 58 Q 80 58 80 82" dur="3s" repeatCount="indefinite" />
            </path>
        </svg>
    );
}

/**
 * Typing indicator — animated dots
 */
export function TypingDots() {
    return (
        <div className="typing-indicator">
            <span className="typing-dot" style={{ animationDelay: "0s" }}></span>
            <span className="typing-dot" style={{ animationDelay: "0.15s" }}></span>
            <span className="typing-dot" style={{ animationDelay: "0.3s" }}></span>
        </div>
    );
}

/**
 * Animated sparkle icon for header
 */
export function SparkleIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="sparkle-icon">
            <path
                d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                fill="url(#sparkleGrad)"
                stroke="#10b981"
                strokeWidth="0.5"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 12 12;5 12 12;-5 12 12;0 12 12"
                    dur="3s"
                    repeatCount="indefinite"
                />
                <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
            </path>
            <defs>
                <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
            </defs>
        </svg>
    );
}

/**
 * Animated send icon
 */
export function SendIcon({ size = 22 }) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            className="send-icon"
        >
            <defs>
                <linearGradient id="sendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e0e7ff" />
                </linearGradient>
            </defs>
            <path
                d="M22 2L11 13"
                stroke="url(#sendGrad)"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                fill="url(#sendGrad)"
                opacity="0.9"
            />
        </svg>
    );
}
