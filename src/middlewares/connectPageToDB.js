import mongoose from "mongoose";

const connectPageToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    } else {
      return mongoose.connect(process.env.DB_URI);
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectPageToDB;
