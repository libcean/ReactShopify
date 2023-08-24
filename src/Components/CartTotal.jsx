import React from "react";
import { handleCalculateTotal } from "../Functions/handleCalculateTotal";

const CartTotal = (props) => {
  const total = handleCalculateTotal(props.TotalPrice);

  return (
    <>
      {total <= 0 ? (
        <h5> YourCart Is Empty</h5>
      ) : (
        <>
          <h3>
            your total: ₦ <span className="cart-total">{total}</span>
          </h3>
          <button className="banner-btn" onClick={props}>
            Pay Now
          </button> <br /> <br />
          <button className="clear-cart banner-btn" onClick={props.clearCart}>
            empty cart
          </button>
        </>
      )}
    </>
  );
};

export default CartTotal;
