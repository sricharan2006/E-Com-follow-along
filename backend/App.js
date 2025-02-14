const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database");

// Load environment variables BEFORE using them
dotenv.config({ path: "./config/.env" });

const app = express();

// Connect to database
connectDatabase();

module.exports = app;
