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
import CreateProduct from './Pages/Dashboard/CreateProduct/CreateProduct';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       { 
          // <Route path="/" element={<Home/>} />
        }
        <Route path="/" element={<Dashboard/>} />
           <Route path="/product/:id" element={<ProductDetail />} />
      
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/create' element={<CreateProduct/>} />
      </Routes>
    </BrowserRouter>

    
  );
};

export default App;
