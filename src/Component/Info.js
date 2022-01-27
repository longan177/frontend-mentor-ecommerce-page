import React, { useState, useContext } from "react";
import { close, minus, plus, cart } from "./Icons";
import { CartContext } from "./CartContext";

function Info() {
  const [Amount, setAmount, ConfirmAmount, setConfirmAmount] =
    useContext(CartContext);

  const confirmAmount = () => {
    setConfirmAmount((prev) => prev + Amount);
  };
  return (
    <div className="info">
      <div className="title">
        <span>SNEAKER COMPANY</span>
        <h2>Fall Limited Edition Sneakers</h2>
      </div>
      <article>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will widthstand everything
          the weather can offer.
        </p>
      </article>
      <div className="price-detail">
        <div className="priceAndOffer align-center">
          <span className="price">$125.00</span>
          <span className="offer">50%</span>
        </div>
        <span className="ori-price">$250.00</span>
      </div>
      <footer>
        <div className="quantity">
          <button
            className="action-amount"
            onClick={() => {
              if (Amount !== 0) setAmount(Amount - 1);
            }}
          >
            {minus}
          </button>
          <span>{Amount}</span>
          <button
            className="action-amount"
            onClick={() => setAmount(Amount + 1)}
          >
            {plus}
          </button>
        </div>
        <div className="buttonCart">
          <button
            onClick={confirmAmount}
            className={`addToCart align-center ${
              Amount === 0 ? "button-disable" : ""
            }`}
          >
            <span>{cart}</span> <span>Add to cart</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Info;
