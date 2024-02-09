import React from 'react';
import './Cart.css'


const Cart = ({choice }) => {
  

  return (
      <div className="card-header">
        <h1>Cart-item</h1>
      <div>No item are in the cart</div>
      <div>
        <ul>
          {
            choice && choice.map((c)=>{
              return <div key={c.id} className='cart'>
                 <img src={c.image} alt={c.name} className='item-image'/>
                 <h1>{c.name}</h1>
                 <div className='cart-button'>
                    <button className='addbtn'>+</button>
                    <p className='quantity'>{c.quantity}</p>
                    <button className='minusbtn'>-</button>
                 </div>
              </div>
            })
          }
        </ul>
      </div>
      </div>
  )
}

export default Cart