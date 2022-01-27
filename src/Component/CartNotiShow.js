import React, { useState } from "react";

export const CartNotiShowContext = React.createContext();

export function CartNotiShowProvider({ children }) {
  const [showCartNoti, setshowCartNoti] = useState(false);

  return (
    <CartNotiShowContext.Provider value={[showCartNoti, setshowCartNoti]}>
      {children}
    </CartNotiShowContext.Provider>
  );
}
