import { Link } from 'react-router-dom';
import '../styles/ProductItem.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductItem({product}){
    const dispatch = useDispatch();

    function handleAdd(){
        dispatch(addToCart(product));
    }
    //To show productItem
    return (
    <div className="product-card">
        <Link to={`/product/${product.id}`}>
        <img src = {product.thumbnail} alt={product.title} />
        <h4>{product.title}</h4>
        </Link>
        <p>${product.price}</p>
        <button onClick={handleAdd}>Add to Cart</button>
    </div>
    );
}

export default ProductItem;