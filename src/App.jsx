import { useState } from 'react';
import './App.css'
import data from './Components/back/data';
import Header from './Components/front/Header/Header';
import Rout from './Components/front/Route/Route';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  const {productItems} =  data;
  const [product , setProduct] = useState([]);

const handleClick = (item) =>{
  const productExit = product.find((p)=>(
    p.id === item.id
  ))
  if(productExit){
    setProduct(product.map((i)=>(
      i.id === item.id ? {...productExit ,quantity:productExit.quantity+1} : i
    )))
  }
  else{
    setProduct([...product,{...item,quantity:1}]);
  }
}
console.log(product)
const handleRemove = (item) =>{
  const productExit = product.find((p)=>{
    p.id === item.id
  })
  if(productExit.quantity == 1){
    setProduct(product.filter((p)=>(
      item.id !== p.id
    )))
  }
}

  return (
    <Router>
       <Header />
       <Rout  productItems={productItems} product= {product} handleClick={handleClick} handleRemove={handleRemove}/>
    </Router>
  )
}

export default App;
