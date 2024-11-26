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

const listGold = async(req,res)=>{

  try{
 const gold = await goldModel.find({});
 res.json({ success: true, message: 'Gold' , gold})
    

  }
  catch(error){
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to list food" });

  }
}


const removeGold =  async(req ,res)=>{
  try{
        const gold = await goldModel.findById(req.body.id);
        fs.unlink(`uploads/${gold.image}`,()=>{ })

        await goldModel.findByIdAndDelete(req.body.id);

         

    res.status(201).json({success : true, message: 'Gold removed successfully',gold})

  }
  catch(error){
    res.status(500).json({success: false , message : "failed to remove product"})

  }

}




export { addGold ,listGold , removeGold };
