import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import '../styles/CartItem.css'

function CartItem({item}){
    const dispatch = useDispatch();
    //display cart Items
    return (
        <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="info">
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <input type="number" min="1" value={item.quantity} onChange ={(e)=>dispatch(updateQuantity({id: item.id, quantity: +e.target.value}))} />
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
        </div>
    )
}
export default CartItem;