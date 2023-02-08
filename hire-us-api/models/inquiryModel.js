import mongoose, { Schema } from "mongoose";
import { connectDB } from "../hire-us-mongodb/index.js"

 


export const Inquiry = mongoose.model("inquiries", new Schema({
    name: String,
    email: String,
}))