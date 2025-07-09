import { getAllProduct, getProductById } from "../controllers/product.controller.js";
import { login, register } from "../controllers/user.controller.js";
// Product routes
export function productRoutes(app){
    app.get('/products', getAllProduct);
    app.get('/products/:id', getProductById);
    app.post('/register', register);
    app.post('/login', login);
}