const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    chatID: {
        type : Number,
        required : true
    },
    prevChat: {
        type: String,
        default : ''
    }
})

module.exports = mongoose.model('Chats', chatSchema);