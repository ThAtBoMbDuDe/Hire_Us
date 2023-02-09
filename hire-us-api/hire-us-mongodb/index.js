import mongoose from "mongoose";


export const connectDB = async () => {
  try{
    await mongoose.connect('mongodb://mongo:27017/rocketpop', {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (err) {
    console.error(err);
  }
}

