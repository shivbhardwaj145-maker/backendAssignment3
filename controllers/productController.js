const Product = require("../models/Product.js");

const getProducts = async (req , res) => {
    try{
        // Added simple pagination & filtering to meet assignment requirements
        const { category, page = 1, limit = 10 } = req.query;
        const query = category ? { category } : {};
        const skip = (Number(page) - 1) * Number(limit);
        
        const products = await Product.find(query).skip(skip).limit(Number(limit));
        res.json(products);
    } catch(error){
        res.status(500).json({success: false , message: error.message});
    }
}

const getProductById = async (req , res) => {
    const id = req.params.id;
    try{
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({success: false , message: "Product Not Found"});
        }
        res.json(product);
    } catch (error){
        res.status(500).json({success: false , message: error.message});
    }
}

const AddProduct = async (req , res) => {
    console.log(req.body)
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error){
        res.status(500).json({success: false , message: error.message});
    }
}

const UpdateProduct = async (req , res) => {
    const id = req.params.id;
    try{
        const product = await Product.findByIdAndUpdate(id , req.body , {new:true , runValidators: true});
        if(!product){
            return res.status(404).json({success: false , message: "Product Not Found"});
        }
        res.json(product);
    } catch (error){
        res.status(500).json({success: false , message: error.message});
    }
}

const DeleteProduct = async (req , res) => {
    const id = req.params.id;
    try{
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({success: false , message: "Product Not Found"});
        }
        res.json(product);
    } catch (error){
        res.status(500).json({success: false , message: error.message});
    }
}

// Assignment specific additions
const getLowStockAlerts = async (req , res) => {
    try{
        const threshold = Number(req.query.threshold) || 10;
        const products = await Product.find({ stock: { $lte: threshold } });
        res.json(products);
    } catch (error){
        res.status(500).json({success: false , message: error.message});
    }
}

const getCategorySummary = async (req , res) => {
    try{
        const summary = await Product.aggregate([
            { $group: { _id: '$category', totalProducts: { $sum: 1 }, totalStock: { $sum: '$stock' } } }
        ]);
        res.json(summary);
    } catch (error){
        res.status(500).json({success: false , message: error.message});
    }
}

module.exports = {
    getProducts,
    getProductById,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    getLowStockAlerts,
    getCategorySummary
}
