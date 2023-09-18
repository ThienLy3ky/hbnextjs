import React, { createContext, useEffect, useState } from "react";
import { getCart, productcart } from "@/src/utils/cart.client";
// Initiate Context

const CartContext = createContext<any>({});
// Provide Context
export const CartProvider = ({ children }: any) => {
  const [carts, setCarts] = useState<productcart[]>();
  console.log("🚀 ~ file: client.context.tsx:9 ~ CartProvider ~ carts:", carts);
  useEffect(() => {
    setCarts(getCart());
  }, []);
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
