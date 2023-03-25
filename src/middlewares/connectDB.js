import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  } else {
    return await mongoose.connect(process.env.DATABASE_URI);
  }
};

export default connectDB;
