const TelegramBot = require("node-telegram-bot-api");
const dotenv = require('dotenv');
const generateResponse = require("./helpers/botResponse");
const ConnectWithDB = require("./config/dbConnect");

// config the dotenv
dotenv.config();
ConnectWithDB();
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

// emit the on event when user
// send the message
bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const aiResponse = await generateResponse(chatId, msg.text);
    bot.sendMessage(chatId, aiResponse);
});

console.log("Bot is running...");
