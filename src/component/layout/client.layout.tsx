import { CartProvider } from "@/src/component/context/client.context";
import MenuClient from "@/src/component/menu/menu.client";
import Header from "@/src/component/header/index.client";
// import { Children } from "react";
import "@/public/static/library/css/style.css";
export default function ClientLayout({ children }: any) {
  return (
    <CartProvider>
      <Header />
      <MenuClient data="data" />
      {children}
      <button className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </button>
    </CartProvider>
  );
}
