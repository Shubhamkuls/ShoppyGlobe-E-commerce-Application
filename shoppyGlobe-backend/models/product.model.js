import mongoose from "mongoose";
//product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    stock:Number
});

const Product = mongoose.model('Product', productSchema);

export default Product;