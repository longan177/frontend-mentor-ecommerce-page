import React, { useState } from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [Amount, setAmount] = useState(0);
  const [ConfirmAmount, setConfirmAmount] = useState(0);

  return (
    <CartContext.Provider
      value={[Amount, setAmount, ConfirmAmount, setConfirmAmount]}
    >
      {children}
    </CartContext.Provider>
  );
}
