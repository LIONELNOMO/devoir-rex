import questions from "../data/questions";

/**
 * Normalize text: lowercase, remove accents, remove punctuation
 */
function normalize(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, "")
        .trim();
}

/**
 * Extract keywords from text (remove stop words)
 */
const stopWords = new Set([
    "le", "la", "les", "un", "une", "des", "de", "du", "au", "aux",
    "et", "ou", "mais", "donc", "car", "ni", "que", "qui", "quoi",
    "est", "sont", "a", "ont", "fait", "faire", "etre", "avoir",
    "ce", "cette", "ces", "mon", "ma", "mes", "ton", "ta", "tes",
    "son", "sa", "ses", "pour", "par", "sur", "dans", "avec", "sans",
    "en", "y", "il", "elle", "on", "nous", "vous", "ils", "elles",
    "je", "tu", "se", "ne", "pas", "plus", "si", "bien", "tres",
]);

function extractKeywords(text) {
    const normalized = normalize(text);
    return normalized.split(/\s+/).filter((word) => word.length > 1 && !stopWords.has(word));
}

/**
 * Calculate similarity score between user message and a question
 */
function calculateScore(userKeywords, questionKeywords) {
    if (userKeywords.length === 0 || questionKeywords.length === 0) return 0;

    let matches = 0;
    for (const userWord of userKeywords) {
        for (const qWord of questionKeywords) {
            if (qWord.includes(userWord) || userWord.includes(qWord)) {
                matches++;
                break;
            }
        }
    }

    return matches / Math.max(userKeywords.length, questionKeywords.length);
}

/**
 * Find the best matching answer for the user's message
 */
export function findBestAnswer(userMessage) {
    const userKeywords = extractKeywords(userMessage);

    if (userKeywords.length === 0) {
        return getDefaultResponse();
    }

    let bestScore = 0;
    let bestAnswer = null;

    for (const item of questions) {
        const questionKeywords = extractKeywords(item.question);
        const score = calculateScore(userKeywords, questionKeywords);

        if (score > bestScore) {
            bestScore = score;
            bestAnswer = item.answer;
        }
    }

    if (bestScore >= 0.3) {
        return bestAnswer;
    }

    return getDefaultResponse();
}

/**
 * Default responses when no match is found
 */
const defaultResponses = [
    "Hmm, je ne suis pas sur de comprendre. Peux-tu reformuler ta question ?",
    "Desole, je n'ai pas trouve de reponse a cette question. Essaie avec d'autres mots !",
    "Je suis un chatbot avec 100 questions. Essaie de me poser des questions de culture generale !",
    "Je n'ai pas compris. Pose-moi une question sur la geographie, l'histoire, la science ou la technologie !",
    "Astuce : essaie des questions comme « Quelle est la capitale de la France ? » ou « Combien d'os a le corps humain ? »",
];

function getDefaultResponse() {
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

/**
 * Get the welcome message
 */
export function getWelcomeMessage() {
    return "Salut ! Je suis ChatBot Rex, ton assistant de culture generale ! Pose-moi une question parmi mes 100 sujets : geographie, science, histoire, techno, maths, sport, culture et nature.";
}
