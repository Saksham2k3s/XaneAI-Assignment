const express = require('express');
const ConnectWithDB = require('./config/dbConnect');
const serverRoute = require('./routes');
const cors = require('cors')
require('dotenv').config();
const app = express();

// Connect With Database
ConnectWithDB();

// Cors Config
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "POST,GET",
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization'

}))
// Middlerware
app.use(express.json());
// Add route
app.use('/api/v1', serverRoute)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("App is running on the PORT", PORT);
})