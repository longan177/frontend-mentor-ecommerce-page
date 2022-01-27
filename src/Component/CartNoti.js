import React, { useState, useContext } from "react";

import CartNotiItem from "./CartNotiItem";
import { CartContext } from "./CartContext";

function CartNoti() {
  const [, , ConfirmAmount, setConfirmAmount] = useContext(CartContext);
  return (
    <div className="cart-notification show-cart-notification ">
      <header>
        <h2>Cart</h2>
      </header>
      {ConfirmAmount ? (
        <CartNotiItem />
      ) : (
        <div className="cart-empty ">
          <h4>Your cart is empty.</h4>
        </div>
      )}
    </div>
  );
}

export default CartNoti;
