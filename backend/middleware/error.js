const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong MongoDB ID error
    if (err.name === "CastError") {
        const message = `Resource not found with this id: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate key entered: ${Object.keys(err.keyValue)}`;
        err = new ErrorHandler(message, 400);
    }

    // Invalid JWT error
    if (err.name === "JsonWebTokenError") {
        const message = "Invalid token, please try again later";
        err = new ErrorHandler(message, 400);
    }

    // JWT expired error
    if (err.name === "TokenExpiredError") {
        const message = "Token has expired, please try again later";
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
