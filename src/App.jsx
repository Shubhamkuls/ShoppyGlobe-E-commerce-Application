import { Suspense, lazy } from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import './App.css'
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';

function App() {
  //Lazy loading ProductList, ProductDetails, cart
  const ProductList = lazy(()=>import('./Components/ProductList'));
  const ProductDetails = lazy(()=>import('./Components/ProductDetails'));
  const Cart = lazy(()=>import('./Components/Cart'));

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p>Loading</p>}>
      <Routes>
      <Route path = "/" element={<ProductList />} />
      <Route path = "/product/:id" element={<ProductDetails />} />
      <Route path = "/cart" element={<Cart />} />
      <Route path = "*" element={<NotFound />} /> 
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
