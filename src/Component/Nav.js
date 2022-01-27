import React, { useState, useContext } from "react";
import { navLinks } from "./Data";
import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";
import CartNoti from "./CartNoti";
import { CartNotiShowContext } from "./CartNotiShow";
function Nav() {
  const [showSidebar, setshowSidebar] = useContext(SidebarContext);
  const [, , ConfirmAmount, setConfirmAmount] = useContext(CartContext);

  const [showCartNoti, setshowCartNoti] = useContext(CartNotiShowContext);
  return (
    <div className="nav-center">
      <div className="nav-header">
        <div className="bar-logo align-center">
          <button onClick={() => setshowSidebar(!showSidebar)}>
            <img className="logo" src="/images/icon-menu.svg" alt="menu"></img>
          </button>
          <img src="/images/logo.svg" alt="logo"></img>

          <ul className="nav-link align-center">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href="#">{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="icons align-center">
          <div className="cart-icon">
            <span className="cart-amount">{ConfirmAmount}</span>
            <button onClick={() => setshowCartNoti(!showCartNoti)}>
              <img src="/images/icon-cart.svg" alt="cart"></img>
            </button>
            <div
              className={`noti-container ${
                showCartNoti ? "show-cart-notification" : ""
              }`}
            >
              <CartNoti />
            </div>
          </div>
          <img
            className="avatar"
            src="/images/image-avatar.png"
            alt="menu"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Nav;
