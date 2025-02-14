const mongoose = require("mongoose");
require("dotenv").config(); // Load dotenv here as well

const connectDatabase = async () => {
    try {
        const uri = process.env.MONGO_URI;

        console.log(`Loaded MONGO_URI: ${uri ? "URI found" : "URI NOT FOUND"}`);

        if (!uri) {
            throw new Error("❌ MongoDB connection URI is missing!");
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected successfully!");
    } catch (error) {
        console.error(`❌ MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDatabase;
