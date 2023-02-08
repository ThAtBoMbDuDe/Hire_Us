import mongoose, { Schema } from "mongoose";
import { connectDB } from "../hire-us-mongodb/index.js"

 
let id = 0

const newInquiry = new Schema({
    // _id: {
    //     type: Number,
    //     required: true,
        
    // },
    companyName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    companyEmail: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true
    },
    contactNum: {
        type: Number,
        required: true
    },
    personalEmail: {
        type: String,
        required: true
    }    
})

const Inquiry = mongoose.model('Inquiry', newInquiry);
export { Inquiry }