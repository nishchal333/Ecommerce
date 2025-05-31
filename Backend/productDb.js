require("dotenv").config();
const connectDB = require("./DATABASE/connectDb");
const product = require("../Backend/model/schema.js");
const ProductJson = require("./product.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        
        // Check if connection is established
        console.log("MongoDB connected successfully");

        // Existing data ko delete karo
        await product.deleteMany({});
        console.log("Existing products deleted");

        // ProductJson se data insert karo
        await product.create(ProductJson);
        console.log("New products inserted successfully");
    } catch (error) {
        console.log(error);
    }
}

start();
