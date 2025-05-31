// const mongoose = require("mongoose");

// const connectDB = (uri) => {
//     mongoose.connect(uri, {
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true
//         connectTimeoutMS: 30000, // 30 seconds
//             socketTimeoutMS: 45000, 
//     })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log('MongoDB Connection Error: ', err));
// }

// module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async (url) => {
    const maxRetries = 5;
    let retries = 0;

    while (retries < maxRetries) {
        try {
            await mongoose.connect(url, {
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                connectTimeoutMS: 30000,
                socketTimeoutMS: 45000,
            
          
            });
            console.log('MongoDB connected');
            return;
        } catch (error) {
            console.error(`MongoDB connection error (attempt ${retries + 1}):`, error);
            retries += 1;
            if (retries < maxRetries) {
                console.log('Retrying connection...');
                await new Promise(res => setTimeout(res, 5000)); // wait for 5 seconds before retrying
            } else {
                throw error;
            }
        }
    }
};

module.exports = connectDB;
