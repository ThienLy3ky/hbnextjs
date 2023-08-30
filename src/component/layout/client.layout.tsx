import { CartProvider } from "@/src/component/context/client.context";
import MenuClient from "@/src/component/menu/menu.client";
import Header from "@/src/component/header/index.client";
// import { Children } from "react";
import "@/public/static/library/css/style.css";
import Script from "next/script";
import Footer from "../footer/footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import UserAdminService from "@/src/controller/api/login.api";
import useUserHook from "@/src/controller/hooks/user.hook";
export default function ClientLayout({ children }: any) {
  const router = useRouter();
  const Roler = useSelector(({ app }) => app.adminRole);
  const isLogin = useSelector(({ app }) => app.userData);

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
