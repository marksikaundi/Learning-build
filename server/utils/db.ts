import e from "express";
import mongoose from "mongoose";
require("dotenv").config();

const dbUrl: string = process.env.DB_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);

    console.log(`MongoDB connected with: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Retry connection after 5 seconds
    setTimeout(connectDB, 5000);
  }
};


export default connectDB;
