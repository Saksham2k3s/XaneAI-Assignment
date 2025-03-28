const mongoose = require('mongoose')

const ConnectWithDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process with failure
    });
}

module.exports = ConnectWithDB