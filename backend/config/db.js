import mongoose from 'mongoose';

export const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://admin:admin123@cluster0.2nqik.mongodb.net/AtticaGoldDelivery?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("DB connection established")
  })
}


