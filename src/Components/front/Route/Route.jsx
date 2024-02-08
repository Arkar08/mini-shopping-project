import React from 'react';
import { Route, Routes  } from "react-router-dom";
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';

const Rout = ({productItems}) => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home productItems={productItems} />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart />}/>
       </Routes>
    </div>
  )
}

export default Rout;