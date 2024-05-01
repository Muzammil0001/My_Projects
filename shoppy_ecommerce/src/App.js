import React from 'react';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min"
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-loading-skeleton/dist/skeleton.css'
import "./App.css"
import Dashboard from './Pages/Dashboard/Dashboard'; 
import Cart from './Pages/Componets/Navbar/Cart';
import ProductDetail from "./Pages/Componets/Content/ProductDetail"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CreateProduct from './Pages/Dashboard/Products/CreateProduct/CreateProduct';
import UpdateProduct from './Pages/Dashboard/Products/UpdateProduct/UpdateProduct';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       { 
           <Route path="/" element={<Home/>} />
        }
        <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/product/:id" element={<ProductDetail />} />
      
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/create' element={<CreateProduct/>} />
        <Route path='/product/update/:id' element={<UpdateProduct/>} />
      </Routes>
    </BrowserRouter>

    
  );
};

export default App;
