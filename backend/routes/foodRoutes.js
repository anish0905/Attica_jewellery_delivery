import express from 'express';
import multer from 'multer';
import { addGold } from '../controllers/goldController.js';

// Multer setup to handle file uploads
const storage = multer.diskStorage({
  destination: "uploads",  // Path where the files will be stored
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);  // Unique filename based on timestamp
  }
});

const upload = multer({ storage: storage });

const foodRouter = express.Router();

// Endpoint for adding gold
foodRouter.post('/add', upload.single("image"), addGold); // 'image' is the field name for the file upload

export default foodRouter;
