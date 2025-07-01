import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import '../styles/Cart.css'

function Cart(){
    //display cart using redux state
    const cart = useSelector((state) => state.cart);
    if(!cart.length){
        return <p>Cart is Empty</p>
    }
    const total = cart.reduce((sum, item)=>sum+item.price*item.quantity, 0);

    return(
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cart.map(item =>(
                    <CartItem key = {item.id} item={item} />
                ))}
            </div>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}
export default Cart;