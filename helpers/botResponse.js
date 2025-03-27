const axios = require('axios');
const Chat = require('../models/chatSchema');
const dotenv = require('dotenv');

dotenv.config();

/**
 * @param {string} chatId - unique chat id
 * @param {string} message - user's query
 * @returns {Promise<string>} - AI response
 */
const generateResponse = async (chatId, message) => {
    try {
        // Find previous chat history
        let userChat = await Chat.findOne({ chatID: chatId });

        // Define system instruction for Ollama
        const systemInstruction = "You are a helpful AI assistant. Respond concisely and informatively.";

        // Format conversation history properly
        let chatHistory = "";
        if (userChat) {
            const historyArray = userChat.prevChat.split("\n").slice(-10); // Keep last 10 exchanges
            chatHistory = historyArray.join("\n");
        }

        const chatContext = `${systemInstruction}\n\nPrevious Conversation:\n${chatHistory}\n\nUser: ${message}\nAI:`;

        const response = await axios.post("http://localhost:11434/api/generate", {
            model: "smollm2:135m",
            prompt: chatContext, 
            stream: false
        });

        const aiResponse = response?.data?.response?.trim() || "Sorry, I couldn't generate a response.";

        // Store updated chat history
        // Take only limited part of history
        const newHistory = `${chatHistory}\nUser: ${message}\nAI: ${aiResponse}`.split("\n").slice(-20).join("\n");

        await Chat.updateOne(
            { chatID: chatId },
            { prevChat: newHistory },
            { upsert: true }
        );

        return aiResponse;
    } catch (error) {
        console.error("Error calling Ollama:", error);
        return "Oops! Something went wrong.";
    }
};

module.exports = generateResponse;
