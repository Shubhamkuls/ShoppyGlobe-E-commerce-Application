import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

//Add a product in cart
export async function addToCart(req,res){
    const {productId, quantity} = req.body;
    const userId = req.user.userId;

    if(!mongoose.Types.ObjectId.isValid(productId)){
        return res.status(400).json({error: 'Invalid product ID'});
    }

    try{
        const product = await Product.findById(productId);
        if(!product) {
            return res.status(404).json({error: 'Product not found'});
        }

        let cart = await Cart.findOne({userId});

        if(!cart){
            cart = new Cart({userId, items:[]});
        }
        const itemIndex = cart.items.findIndex(
            item => item.productId.toString() === productId
        );

        if(itemIndex !== -1){
            cart.items[itemIndex].quantity += quantity;
        } else{
            cart.items.push({productId, quantity});
        }

        await cart.save();
        res.status(200).json({message: 'Product added to cart', cart});
    } catch(err){
        res.status(500).json({error: 'Failed to add to cart'});
    }
}
//update quantity 
export async function updateCartItem(req,res){
    const {productId} = req.params;
    const {quantity} = req.body;
    const userId = req.user.userId;

    if(!mongoose.Types.ObjectId.isValid(productId)){
        return res.status(400).json({error: 'Invalid product ID'});
    }
    try{
        const cart = await Cart.findOne({userId});
        if(!cart){
            return res.status(404).json({error: 'cart not found'});
        }
        const item = cart.items.find(
            (item) => item.productId.toString() === productId
        );
        if(!item){
            return res.status(404).json({error:'Product not found'});
        }
        item.quantity = quantity;
        await cart.save();
        res.status(200).json({message:'Cart updated'});
    } catch(err){
        res.status(500).json({error: 'Failed to update cart'});
    }

}
// delete from cart
export async function removeFromCart(req,res){
    const {productId} = req.params;
    const userId = req.user.userId;

    if(!mongoose.Types.ObjectId.isValid(productId)){
        return res.status(400).json({error: 'Invalid product ID'});
    }
    try{
        const cart = await Cart.findOne({userId});
        if(!cart){
            return res.status(404).json({error: 'cart not found'});
        }
        const initialLength = cart.items.length;
        cart.items = cart.items.filter(
            (item) => item.productId.toString() !== productId
        );
        if(cart.items.length === initialLength){
            return res.status(404).json({error:"Product not in cart"});
        }
        await cart.save();
        res.status(200).json({message:'Product removed from cart',cart});
    }catch(err){
        res.status(500).json({ error: 'Failed to remove product from cart' });
    }
}