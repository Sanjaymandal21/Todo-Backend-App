// import mongoose
import mongoose from "mongoose";
async function connectDB() {
    try {
        console.log("Attempting to connect...");
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/todo_app";
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB...");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;



