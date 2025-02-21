const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load .env BEFORE using process.env
dotenv.config({ path: "./config/.env" });

// Initialize app FIRST before using it
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Required to parse JSON requests

// Import database connection
const connectDatabase = require("./db/Database");

// Connect to database AFTER loading .env
connectDatabase();

// ✅ Basic API route for testing
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Define PORT
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
