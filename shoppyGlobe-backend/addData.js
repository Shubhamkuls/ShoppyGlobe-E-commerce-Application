import mongoose from "mongoose";
import Product from "./models/product.model.js";
//Adding data to mongoDb
mongoose.connect('mongodb://localhost:27017/ShoppyGlobe');

const db = mongoose.connection;

db.on("open", ()=>{
    console.log("Mongodb connected");
});
db.on("error", ()=>{
    console.log("Mongodb not connected");
});

async function fetchProducts(){
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products;
    
        const formattedProducts = products.map((p) => ({
          name: p.title,
          price: p.price,
          description: p.description,
          stock: p.stock,
        }));
    
        await Product.insertMany(formattedProducts);
        console.log('Products inserted successfully!');
      } catch (err) {
        console.error('Error inserting products:', err);
      } finally {
        mongoose.disconnect();
      }
}
fetchProducts();