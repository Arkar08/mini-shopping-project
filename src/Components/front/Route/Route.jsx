import React from 'react';
import { Route, Routes  } from "react-router-dom";
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';

const Rout = ({productItems , product ,handleClick ,handleRemove}) => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home productItems={productItems} handleClick={handleClick}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart product={product} handleClick={handleClick} handleRemove={handleRemove}/>}/>
       </Routes>
    </div>
  )
}

export default Rout;