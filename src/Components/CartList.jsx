import React from "react";

import CartUpdateItem from "./CartUpdateItem";

const CartList = ({ myCart, removeItem }) => {
  return myCart.map((cart) => (
    <div key={cart.id} className="cart-item">
      <img src={cart.image} alt={cart.title} />
      <div>
        <h4>{cart.title}</h4>
        <h5>{cart.price}</h5>
        <span className="remove-item" onClick={() => removeItem(cart.id)}>
          <span className="text-danger">Cick To Remove</span>
        </span>
      </div>
      <CartUpdateItem totalItem={cart.totalItem} id={cart.id} />
    </div>
  ));
};

export default CartList;
