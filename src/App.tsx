import './App.css'
import Navbar  from './Component/Navbar'
import Footer from './Component/Footer';
import {
 Route,  
  Routes,
  
  
} from "react-router-dom";

import Store from './pages/Store';
import Home from './pages/Home';
import Productslug from './pages/Productslug';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';
function App() {
 
  return (
    <>
    <ShoppingCartProvider>

      <Navbar/>
      <Routes>
        <Route   path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/product/:slug" element={<Productslug/>} />
      </Routes>
     <Footer/>
    </ShoppingCartProvider>
    
    </>
  )
}

export default App
