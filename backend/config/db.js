import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://archana:757575@cluster0.u0sxm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
} 