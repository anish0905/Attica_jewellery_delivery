import goldModel from "../models/goldModel.js";
import fs from 'fs'

// Add gold item
const addGold = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  
  const newGold = new goldModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  try {
    await newGold.save();
    res.status(201).json({ success: true, message: 'Gold added successfully' , newGold });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to add gold"});
  }
};

export { addGold };
