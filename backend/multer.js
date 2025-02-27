const multer = require('multer');

// Configure multer storage for general uploads
const storage = multer.diskStorage({
  destination: '../uploads',
  filename: function (req, file, cb) {
    console.log(req.body);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png"); // Define
  },
});

// Configure multer storage for product uploads
const pstorage = multer.diskStorage({
  destination: 'products/',
  filename: function (req, file, cb) {
    console.log(req.body);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png"); // Define
  },
});

// Initialize upload objects
exports.upload = multer({ storage: storage });
exports.pupload = multer({ storage: pstorage });
