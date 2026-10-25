require("dotenv").config();
const express= require("express");
const Product = require('./model/schema.js'); 
const app = express();
const connectDB = require("./DATABASE/connectDb.js");
const cors = require('cors');
const port = process.env.PORT || 3000;
const { getallProducts } = require("./controllers/product");

const product_routes = require("./routes/product");

const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/PaymentRoute');

app.get("/", (req,res)=>{
    res.send("Hello I am nishchal");
})
// Middleware to parse JSON
app.use(express.json({extended: false }));
app.use(cors()); // Enable all CORS requests by default

// Route to fetch products
app.get('/api/products', async (req, res) => {
    try {
        await getallProducts(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
// routes
app.use('/api/users', userRoutes);

app.use('/api/payment', paymentRoutes);
// middleware or to set router
app.use("/api/product",product_routes);  
const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
          
    }catch (error){
        console.log(error);
    }
}
start();