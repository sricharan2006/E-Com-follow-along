const express = require("express");
const dotenv = require("dotenv");

// Load .env BEFORE using process.env
dotenv.config({ path: "./config/.env" });
 // Automatically loads from root

const connectDatabase = require("./db/Database");

const app = express();

// Debugging
console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // Should print MongoDB URI

// Connect to database AFTER loading .env
connectDatabase();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
