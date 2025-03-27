# Telegram AI Chatbot with Ollama

This is a **Node.js-powered Telegram bot** that uses **Ollama AI** for generating responses based on chat history. It stores user interactions in a **MongoDB database** to maintain context and provide more meaningful replies.

## 📌 Features
- **AI-powered responses** using Ollama.
- **Maintains chat history** for context-aware responses.
- **Uses MongoDB** to store conversations.
- **Handles multiple users** in a Telegram group or private chat.
- **Optimized prompts** for better AI-generated replies.

## 🚀 Setup & Installation

### **1️⃣ Prerequisites**
Before running the project, ensure you have:
- **Node.js** installed (v16+ recommended)
- **MongoDB** installed and running
- **Ollama installed** ([Installation Guide](https://ollama.ai))
- A **Telegram bot token** from [BotFather](https://t.me/botfather)

---
### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/telegram-ai-bot.git
cd telegram-ai-bot
```

---
### **3️⃣ Install Dependencies**
```sh
npm install
```

---
### **4️⃣ Configure Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
MONGO_URI=your_mongodb_connection_string
OLLAMA_API_URL=http://localhost:11434/api/generate
```

- **`TELEGRAM_BOT_TOKEN`** → Get this from [BotFather](https://t.me/botfather)
- **`MONGO_URI`** → Your MongoDB connection string (local or Atlas)
- **`OLLAMA_API_URL`** → Local Ollama API URL

---
### **5️⃣ Start MongoDB Server**
Make sure your MongoDB server is running:
```sh
mongod
```

---
### **6️⃣ Start the Telegram Bot**
Run the bot with:
```sh
node index.js
```
The bot should now be running and responding to messages on Telegram. 🎉

---
## 🛠 Project Structure
```
📂 telegram-ai-bot/
├── 📁 config/         # Database connection setup
├── 📁 helpers/        # AI response handler
├── 📁 models/         # Mongoose schema for chat history
├── 📁 node_modules/   # Dependencies
├── 📄 index.js        # Main bot logic
├── 📄 .env            # Environment variables
├── 📄 package.json    # Project dependencies
└── 📄 README.md       # Documentation
```

---
## 📝 How It Works
1. **User sends a message** in Telegram.
2. **Bot retrieves past conversations** (if any) from MongoDB.
3. **Formats the chat history** and sends it to Ollama.
4. **Ollama generates a response** based on the previous context.
5. **Bot sends the response** back to the user.
6. **Chat history is updated** in MongoDB for future context.

---
## 🔥 Ollama AI Integration
The bot uses **Ollama** to generate AI responses. Here’s how the AI request is made:
```javascript
const response = await axios.post("http://localhost:11434/api/generate", {
    model: "smollm2:135m",
    prompt: chatContext,
    stream: false
});
```
**Supported Models:** `mistral`, `gemma`, `smollm2:135m`, etc.

---
## 💡 Customization
- **Change AI Model:** Edit `model` in `generateResponse.js`
- **Modify Prompt Format:** Adjust `systemInstruction` and history handling
- **Increase History Length:** Update `.split("\n").slice(-10).join("\n")`

---
## 🤖 Deploying the Bot
### **Run in Background (PM2) 📌**
For a production setup, use **PM2** to keep the bot running:
```sh
npm install -g pm2
pm run start:pm2
```
To restart or stop:
```sh
pm2 restart all
pm2 stop all
```

---
## 🛠 Troubleshooting
**1️⃣ Bot is not responding?**
- Check if the Telegram bot token is correct.
- Make sure MongoDB and Ollama are running.

**2️⃣ Getting meaningless AI responses?**
- Improve the system instruction in `generateResponse.js`
- Use a different AI model (e.g., `mistral` instead of `smollm2`)

**3️⃣ MongoDB connection issues?**
- Ensure `MONGO_URI` is correct.
- Run `mongod` to start the database.

---
## 📜 License
This project is licensed under the **MIT License**.

---
## 🤝 Contributing
Feel free to submit issues or pull requests to improve this bot!

---
## 📩 Contact
For questions or support, reach out via:
- GitHub Issues
- Telegram DM (@YourUsername)

---
### 🎉 Enjoy building your AI-powered Telegram bot! 🚀

