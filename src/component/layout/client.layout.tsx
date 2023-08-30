import { CartProvider } from "@/src/component/context/client.context";
import MenuClient from "@/src/component/menu/menu.client";
import Header from "@/src/component/header/index.client";
// import { Children } from "react";
import "@/public/static/library/css/style.css";
import Script from "next/script";
import Footer from "../footer/footer";
import useUserHook from "@/src/controller/hooks/user.hook";
export default function ClientLayout({ children }: any) {
  const { data, isLoading, refetch } = useUserHook();
  return (
    <CartProvider>
      <Header />
      <MenuClient data={data} />
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
