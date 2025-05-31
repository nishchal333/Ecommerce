const { query } = require("express");
const Product = require("../model/schema.js");


const getallProducts = async (req,res)=>{
    const myData=await Product.find({});
    res.status(200).json({myData});
}
const getStaticProducts = async (req,res)=>{
    
    const myData=await Product.find(req.query).sort("-name").skip(skip).limit(limit);


    res.status(200).json({myData});
}
 module.exports = {getallProducts, getStaticProducts}