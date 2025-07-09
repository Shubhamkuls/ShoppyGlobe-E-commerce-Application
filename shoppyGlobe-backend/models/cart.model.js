import mongoose from "mongoose";
//Cart Schema
const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quality:Number
        }
    ]
});
const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
