const express = require("express");

const router = express.Router();
const { getallProducts,getStaticProducts}=require("../controllers/product");
router.route("/").get(getallProducts);
router.route("/static").get(getStaticProducts);

module.exports = router;
