const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const {upload} = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const jwt=require('jsonwebtoken');
const sendMail=require('../utils/sendMail');

 
// create user
router.post("/create-user",upload.single("file"), async(req,res)=>{
	const {name, email, password} = req.body;
	const userEmail = await User.findOne({email});
	if (userEmail) {
    	return next(new ErrorHandler("User already exists", 400));
  	}
const filename = req.file.filename ;
const fileUrl = path.join(filename);
const user={
	name:name,
	email:email,
	password:password,
	avatar: fileUrl,
} ;
console.log(user);
});
 
module.exports = router;

// POST route for user login
router.post("/login", catchAsyncErrors(async (req, res, next) => {
   
    // Log when login request is received
    console.log("Logging in user...");


    // Extract email and password from request body
    const { email, password } = req.body;


    // Check if both email and password are provided
    if (!email || !password) {
        return next(new ErrorHandler("Please provide email and password", 400));
    }


    // Find user by email in the database and also retrieve the hashed password
    const user = await User.findOne({ email }).select("+password");


    // If no user found, return an error
    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }


    // Compare entered password with the stored hashed password
    const isPasswordMatched = await bcrypt.compare(password, user.password);


    // Log password and hash for debugging (REMOVE in production)
    console.log("At Auth", "Password: ", password, "Hash: ", user.password);


    // If passwords do not match, return an error
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }


    // Remove password from user object before sending response
    user.password = undefined;


    // Send success response with user details
    res.status(200).json({
        success: true,
        user,
    });


}));

