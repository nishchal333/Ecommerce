const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: 
    { type: String, 
        required: true },
    company:
     { type: String,
         required: true },
    price: 
    { type: Number, 
        required: true },
    colors: 
    [{ type: String }], // array of strings for colors
    image: 
    { type: String,
         required: true },
    description: 
    { type: String, required: true },
    category:
     { type: String,
         required: true },
    featured: 
    { type: Boolean,
         default: false } ,
    shipping: 
    { type: Boolean
        , default: false } ,
        stock:{
            type: Number,
        },
        reviews:{
            type: Number,
        },
        stars:{
            type: Number,
        }
       
});

module.exports = mongoose.model("product", productSchema);
