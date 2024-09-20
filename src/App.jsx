
import './App.css'
import Bestsellers from './components/client/Bestsellers';
import Cart from './components/client/Cart'
import Home from './components/client/Home'
import Discount from './components/client/Discount';
import { Routes,Route } from 'react-router-dom'
import { CartProvider } from 'react-use-cart';
import Gift1 from './components/client/Gift1';
import Electronics from './components/client/Electronics';
import BeautyandSkincare from './components/client/BeautyandSkincare';
import ClothingandAcesserories from './components/client/ClothingandAcesserories';
import Sporty from './components/client/Sporty';
import Furniture from './components/client/Furniture';
import Wishlist from './components/wishlist/Wishlist';
import Shop from './components/subpage/Shop';
import Nav from './components/constants/Nav';
import Nav2 from './components/constants/Nav2';
import Footer from './components/constants/Footer';


function App() {
  
  
  return (
    <>
    <div className="dark:bg-black dark:text-white dark:duration-500 duration-500 ">
    <Nav/>
    
    <CartProvider>

    <Nav2/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Cart' element={<Cart/>}/>
     <Route path='/Bestsellers' element={<Bestsellers/>}/>
     <Route path='/Discount' element={<Discount/>}/>
     <Route path='/Gift1' element={<Gift1/>}/>
     <Route path='/BeautyandSkincare' element={< BeautyandSkincare/>}/>
     <Route path='/ClothingandAcesserories' element={< ClothingandAcesserories/>}/>
     <Route path='/Electronics' element={<Electronics/>}/>
     <Route path='/Sporty' element={<Sporty/>}/>
     <Route path='/Furniture' element={<Furniture/>}/>
     <Route path='/Wishlist' element={<Wishlist/>}/>
     <Route path='/Shop' element={<Shop/>}/>
      </Routes>
      </CartProvider>
      <Footer/>
      </div> 
    </>
  )
}

export default App
