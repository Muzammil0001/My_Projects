import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import View from './pages/View/View';
import Form from "./pages/Form/Form"
import Update from "./pages/Update/Update"
import LogsData from './pages/Logs/LogsData';
// import Signup from './pages/Logs/signup';
// import Signin from "./pages/Logs/signin"


const App = () => {
  return (


    <Routes>
      <Route path="/" element={<LogsData />} />
     
      <Route path="/home" element={<Form />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/update/:id" element={<Update />} />

    </Routes>


  );
}

export default App;
