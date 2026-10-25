const Product = require("../model/schema.js");

const getPagination = (req) => {
    const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 12, 1), 100);
    return { page, limit, skip: (page - 1) * limit };
};

const getallProducts = async (req,res)=>{
    if (req.query.id) {
        const products = await Product.find({ _id: req.query.id });
        return res.status(200).json({ products, pagination: { page: 1, limit: products.length, total: products.length, pages: 1 } });
    }

    const { page, limit, skip } = getPagination(req);
    const myData = await Product.find({}).sort("-name").skip(skip).limit(limit);
    const total = await Product.countDocuments();

    res.status(200).json({
        products: myData,
        pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
}
const getStaticProducts = async (req,res)=>{
    const { page, limit, skip } = getPagination(req);
    const filters = { ...req.query };
    delete filters.page;
    delete filters.limit;
    const myData = await Product.find(filters).sort("-name").skip(skip).limit(limit);
    const total = await Product.countDocuments(filters);

    res.status(200).json({
        products: myData,
        pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
};

module.exports = {getallProducts, getStaticProducts};