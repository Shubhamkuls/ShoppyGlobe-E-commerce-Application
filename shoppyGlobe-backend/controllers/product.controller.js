import Product from "../models/product.model.js";
import mongoose from "mongoose";

//getting all product
export async function getAllProduct(req,res){
    try{
        const products = await Product.find();
        res.json(products);
    }catch(err){
        res.status(500).json({error:"Failed to fetch products"});
    }
}

//getting product by id
export async function getProductById(req,res){
    const productId = req.params.id;

    //check for valid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Invalid ID"});
    }
    try{
        const product = await product.findById(productId);
        if(!product){
             return res.status(400).json({error:"Product not found"});
        }
        res.json(product);
    }catch(err){
        res.status(500).json({error:"Failed to fetch"});
    }
}