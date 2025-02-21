const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load .env BEFORE using process.env
dotenv.config({ path: "./config/.env" });

// Initialize app FIRST before using it
const app = express();

// Use CORS middleware AFTER initializing app
app.use(cors());

// Import database connection
const connectDatabase = require("./db/Database");

// Debugging
console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // Should print MongoDB URI

// Connect to database AFTER loading .env
connectDatabase();

// Add a basic route    
app.get("/", (req, res) => {    
    res.send("Server is running!");
});


// Define PORT
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
