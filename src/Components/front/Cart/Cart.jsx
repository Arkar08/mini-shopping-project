import React from 'react';
import './Cart.css'

const Cart = ({product ,handleClick,handleRemove}) => {
  return (
      <div className="card-header">
        <h1>Cart-item</h1>
      {product.length === 0 && <div>No item are in the cart</div>}
      <div>
        {product.map((item)=>(
          <div key={item.id} className='cart'>
            <img src={item.image} alt={item.name}  className='item-image'/>
            <div className='cart-button'>
              <button onClick={()=>handleRemove(item)} className='minusbtn'>-</button>
              <p className='quantity'>{item.quantity}</p>
              <button onClick={()=>handleClick(item)} className='addbtn'>+</button>
            </div>
              <div className='card-text'>
              <p>
                {item.name}
              </p>
              <p><span>$</span>{item.Price}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Cart