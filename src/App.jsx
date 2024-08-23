
import './App.css'
import Bestsellers from './components/Bestsellers';
import Cart from './components/Cart'
import Home from './components/Home'
import Discount from './components/Discount';
import { Routes,Route } from 'react-router-dom'
import { CartProvider } from 'react-use-cart';
import Gift1 from './components/Gift1';
import Electronics from './components/Electronics';
import BeautyandSkincare from './components/BeautyandSkincare';
import ClothingandAcesserories from './components/ClothingandAcesserories';
import Sporty from './components/Sporty';
import Furniture from './components/Furniture';
import Wishlist from './components/wishlist/Wishlist';
import Shop from './components/subpage/Shop';


function App() {
  
  
  return (
    <>
    <div className="dark:bg-black dark:text-white dark:duration-500 duration-500 ">
    <CartProvider>
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
      </div> 
    </>
  )
}

export default App
