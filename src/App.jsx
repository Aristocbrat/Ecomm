
import './App.css'
import Bestsellers from './components/Bestsellers';
import Cart from './components/Cart'
import Home from './components/Home'
import Discount from './components/Discount';
import { Routes,Route } from 'react-router-dom'
import { CartProvider } from 'react-use-cart';

function App() {
  

  return (
    <>
    <CartProvider>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Cart' element={<Cart/>}/>
     <Route path='/Bestsellers' element={<Bestsellers/>}/>
     <Route path='/Discount' element={<Discount/>}/>
      </Routes>
      </CartProvider>
      
    </>
  )
}

export default App
