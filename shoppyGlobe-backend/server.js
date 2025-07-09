import express from "express";
import mongoose from "mongoose";
import { productRoutes } from "./routes/product.route.js";
import { cartRoutes } from "./routes/cart.route.js";

const app = express();

mongoose.connect('mongodb://localhost:27017/ShoppyGlobe');

const db = mongoose.connection;

db.on("open", ()=>{
    console.log("Mongodb connected");
});
db.on("error", ()=>{
    console.log("Mongodb not connected");
});
app.listen(5000, ()=>{
    console.log('Server is running');
})
app.use(express.json());
productRoutes(app);
cartRoutes(app);