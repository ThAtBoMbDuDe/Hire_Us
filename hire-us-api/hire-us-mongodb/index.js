import mongoose from "mongoose";


export const connectDB = async () => {
  try{
    await mongoose.connect('mongodb://127.0.0.1/rocketpop', {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (err) {
    console.error(err);
  }
}

