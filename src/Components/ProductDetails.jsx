import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/ProductDetails.css';

function ProductDetails(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState('loading'); //loading or error or success

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            setStatus('success');
        })
        .catch(() => setStatus('error'));
    }, [id]);

    if(status === 'loading'){
        return <p>Loading</p>
    }
    if (status === 'error'){
        return <p>Failed to load products</p>;
    }

    return (
        <div className="product-detail">
            <img src={product.thumbnail} alt={product.title} />
            <div className="details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Brand: {product.brand}</p>
                <p>Rating: {product.rating}</p>
            </div>
        </div>
    );
}
export default ProductDetails;