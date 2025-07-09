import { authUser } from "../auth.js";
import { addToCart, removeFromCart, updateCartItem } from "../controllers/cart.controller.js";
//Cart Routes with authentication 
export function cartRoutes(app){
    app.post('/cart', authUser, addToCart);
    app.put('/cart/:productId',authUser, updateCartItem);
    app.delete('/cart/:productId',authUser, removeFromCart);
}