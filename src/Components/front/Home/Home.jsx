import React from 'react';
import './Home.css'

const Home = ({productItems ,handleClick }) => {

  return (
    <div className='product'>
       {
        productItems.map((productItem)=>(
          <div key={productItem.id} className='card'>
                    <div className='cart-image'>
                        <img src={productItem.image} alt={productItem.name} className='image' />
                    </div>
                    <div className="text">
                        <h2>{productItem.name}</h2>
                        <h3><span>$</span>{productItem.Price}</h3>
                    </div>
                    <div className="button">
                        <button className='add'onClick={()=>handleClick(productItem)}>Add To Cart</button>
                    </div>
                </div>
        ))
       }
    </div>
  )
}

export default Home;