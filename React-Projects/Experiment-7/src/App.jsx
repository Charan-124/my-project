import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './ProductCard.jsx'

function App() {

  return (
    <div class ="outer-div">
       <div id = "list">Product List</div>
      <div className="cart">
      <ProductCard product={{ name: "Wireless Mouse", price: 25, status: "Available" }} />
      <ProductCard product={{ name: "HD Monitor", price: 150, status: "Out of Stock" }} />
      <ProductCard product={{ name: "USB-C Hub", price: 45, status: "Available" }} />
    </div>
    </div>
  )
}

export default App
