import React, { createContext, useState } from "react";
import { getCart } from "@/src/utils/cart.client";
// Initiate Context
const CartContext = createContext();
// Provide Context
export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState(getCart);
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
