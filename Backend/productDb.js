require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./DATABASE/connectDb");
const product = require("../Backend/model/schema.js");

const ProductJson = require("./kaggle-products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        
        // Check if connection is established
        console.log("MongoDB connected successfully");

        // Existing data ko delete karo
        await product.deleteMany({});
        console.log("Existing products deleted");

        // Insert the normalized Kaggle export into MongoDB.
        await product.create(ProductJson);
        console.log("New products inserted successfully");
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

start();
