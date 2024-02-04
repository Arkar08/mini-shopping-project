import { useState } from 'react';
import './App.css'
import data from './Components/back/data';
import Header from './Components/front/Header/Header';
import Rout from './Components/front/Route/Route';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  const {productItems} =  data;

  return (
    <Router>
       <Header />
       <Rout  productItems={productItems}/>
    </Router>
  )
}

export default App;
