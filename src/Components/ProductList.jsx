import { useState } from "react";
import fetchProducts from "../hooks/fetchProducts.js";
import ProductItem from "./ProductItem";
import '../styles/ProductList.css'
function ProductList(){
    const {products, loading, error} = fetchProducts();//products from api
    const [searchTerm, setSearchTerm] = useState('');//stores what user types in search

    //filering out products when title is same
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return(
        <div className="product-list-container">
        <h2>All Products</h2>
  
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
  
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
  
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
}
export default ProductList;