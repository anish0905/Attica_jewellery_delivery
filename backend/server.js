import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';




//app config

const app = express();
const port = 5000;


//middlewares

app.use(express.json());
app.use(cors());

//db connection
connectDB()

app.get("/" , (req,res)=>{
  res.send("Welcome to the API");

})

app.listen(port,()=>{
  console.log(`Server running on port http://localhost:${port}`);
 
})


//mongodb+srv://admin:<db_password>@cluster0.2nqik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0