import React, { useContext } from "react";
import { remove } from "./Icons";
import { GalleryPhoto, GalleryPhotoThumbnails } from "./GalleryData";
import { CartContext } from "./CartContext";
function CartNotiItem() {
  const [Amount, setAmount, ConfirmAmount, setConfirmAmount] =
    useContext(CartContext);
  return (
    <React.Fragment>
      <article className="align-center">
        <div className="img-container">
          <img src={GalleryPhotoThumbnails[0].src}></img>
        </div>
        <div className="noti-content align-center">
          <h3>Autumn Limited Edition</h3>
          <p>
            $125.00 x {ConfirmAmount} <strong>${125 * ConfirmAmount}</strong>
          </p>
        </div>
        <button onClick={() => setConfirmAmount(0)} className="noti-remove">
          {remove}
        </button>
      </article>
      <div className="noti-button align-center">
        <button className="addToCart">Checkout</button>
      </div>
    </React.Fragment>
  );
}

export default CartNotiItem;
