import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("✅ Database Connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ Connection Error:", err.message);
  });

  try {
    console.log(process.env.MONGODB_URI);
    const uri = `${process.env.MONGODB_URI}/CHAT_APP`;
    console.log("Connecting to:", uri);
    await mongoose.connect(uri);
  } catch (error) {
    console.error("❌ Initial Connection Failed:", error.message);
    //process.exit(1); // Optional: exit if DB is critical
  }
};