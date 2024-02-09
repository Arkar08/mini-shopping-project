import './App.css'
import data from './Components/back/data';
import Header from './Components/front/Header/Header';
import Rout from './Components/front/Route/Route';
import {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
 const {productItems} = data;
 const [choice , setChoice] = useState([]);


 const handleClick = (item) =>{
  const  productBrand = productItems.find((p)=>{
  return item.id === p.id ;
  })
  if(productBrand){
    return setChoice([...choice ,{ ... item , quantity:1}])
  }
 }

  return (
    <Router>
       <Header choice={choice} />
       <Rout productItems={productItems}  handleClick={handleClick} choice={choice} setChoice={setChoice}/>
    </Router>
  )
}

export default App;
