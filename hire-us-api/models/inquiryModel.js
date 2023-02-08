import mongoose, { Schema } from "mongoose";


mongoose.connect('mongodb://127.0.0.1/rocketpop');

export const db = mongoose.connection;   

db.createCollection("contacts", {
    validator: {$jsonSchema: {
       bsonType: "object",
       required: ["phone"],
       properties: {
          phone: {
             bsonType: "string",
             description: "must be a string and is required"
          },
          email: {
             bsonType: "string",
             pattern: "@mongodb\.com$",
             description: "must be a string and match the regular expression pattern"
          },
          status: {
             enum: [ "Unknown", "Incomplete" ],
             description: "can only be one of the enum values"
          }
       }
    }}
 })

export const Inquiry = mongoose.model("inquiries", new Schema({
    name: String,
    email: String,
}))