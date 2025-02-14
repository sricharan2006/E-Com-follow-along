const express = require("express");
const dotenv = require("dotenv");

// Load .env BEFORE using process.env
dotenv.config({ path: "./config/.env" });

const connectDatabase = require("./db/Database");

const app = express();

// Debugging
console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // Should print MongoDB URI

// Connect to database AFTER loading .env
connectDatabase();

// ✅ Fix: Add a basic route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
