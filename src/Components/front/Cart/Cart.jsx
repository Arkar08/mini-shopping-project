import React from "react";
import "./Cart.css";

const Cart = ({ choice, setChoice }) => {
  const handleAdd = (item) => {
    const newChoice = choice.find((c) => {
      return c.id === item.id;
    });
    if (newChoice) {
      setChoice(
        choice.map((dat) => {
          return dat.id === item.id
            ? { ...dat, quantity: newChoice.quantity + 1 }
            : dat;
        })
      );
    }
  };

  const hadleMinus = (item) => {
    const newChoice = choice.find((c) => {
      return c.id === item.id;
    });
    if (newChoice) {
      if (newChoice.quantity === 1) {
        return setChoice(
          choice.filter((cho) => {
            return cho.id !== item.id;
          })
        );
      } else {
        return setChoice(
          choice.map((dat) => {
            return dat.id === item.id
              ? { ...dat, quantity: newChoice.quantity - 1 }
              : dat;
          })
        );
      }
    }
  };
  const total = choice.reduce((c,item)=>
    c + item.quantity *item.Price ,0)
  return (
    <div className="card-header">
      <h1>Cart-item</h1>
      {choice.length === 0 ? (
        <h1>No item are in the cart</h1>
      ) : (
        <div>
          <ul className="cart-nav">
            {choice &&
              choice.map((c) => {
                return (
                  <div key={c.id} className="cart">
                    <img src={c.image} alt={c.name} className="item-image" />
                    <h3>{c.name}</h3>
                    <h2>
                      <span>$</span>
                      {c.Price}
                    </h2>
                    <div className="cart-button">
                      <button className="addbtn" onClick={() => handleAdd(c)}>
                        +
                      </button>
                      <p className="quantity">{c.quantity}</p>
                      <button
                        className="minusbtn"
                        onClick={() => hadleMinus(c)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="total">
                total Price
                 <div>
                  ${total}
                </div>
                </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
