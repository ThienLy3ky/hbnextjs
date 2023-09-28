import { CartProvider } from "@/src/component/context/client.context";
import MenuClient from "@/src/component/menu/menu.client";
import Header from "@/src/component/header/index.client";
// import { Children } from "react";
import "@/public/static/library/css/style.css";
import Script from "next/script";
import Footer from "../footer/footer";
export default function ClientLayout({ children }: any) {
  return (
    <CartProvider value="any">
      <Header />
      <MenuClient />
      {children}
      <button className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </button>
      <Script
        type="text/javascript"
        src="/static/library/js/main.js"
        strategy="lazyOnload"
      ></Script>
      <Footer />
    </CartProvider>
  );
}
