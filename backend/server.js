import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import goldRouter from './routes/foodRoutes.js'




//app config

const app = express();
const port = 5000;


//middlewares

app.use(express.json());
app.use(cors());

//db connection
connectDB()

//api endpoint

app.use('/api/golds',goldRouter)

app.get("/" , (req,res)=>{
  res.send("Welcome to the API");

})

app.listen(port,()=>{
  console.log(`Server running on port http://localhost:${port}`);
 
})


