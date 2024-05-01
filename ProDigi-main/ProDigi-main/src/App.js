import logo from './logo.svg';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import "../node_modules/aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from 'react';
import ServiceDetial from './screen/ServiceDetial';

function App() {
   useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <HomeScreen />}/>
     <Route path='/service/:title' element={ <ServiceDetial />}/>
    
    </Routes>
     
      </BrowserRouter>
   
  );
}

export default App;
