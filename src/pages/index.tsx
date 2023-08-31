import ClientLayout from "@/src/component/layout/client.layout";
import BannerClient from "@/src/component/banner/banner.client";
import Categories from "../component/categories/categori";
import FlashProducts from "../component/product-flash/products.flash";
import Sale from "../component/sale/sale";
import Feature from "../component/header/feature";
import TestProduct from "./home/test.component";
import HomeSlide from "../component/slide/slide.home";
import ListProduct from "../component/list-product-client/list.product";
import HomeModal from "../create_update/client/home";
import { useEffect, useState } from "react";
import useHomeHook from "../controller/hooks/home.client.hook";
export default function Home() {
  const [showmodal, setShowmodal] = useState(false);
  const [product, setProduct] = useState({});
  const { data, isLoading } = useHomeHook();
  console.log("🚀 ~ file: index.tsx:17 ~ Home ~ data:", data);
  return (
    <ClientLayout>
      <BannerClient />
      <Feature />
      <HomeSlide />
      <Categories />
      <FlashProducts
        addProduct={(e: any) => setProduct(e)}
        openModal={() => setShowmodal(!showmodal)}
      />
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Sản phẩm mới</span>
        </h2>
        <ListProduct
          addProduct={(e: any) => setProduct(e)}
          openModal={() => setShowmodal(!showmodal)}
        />
      </div>
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Sản phẩm tin dùng</span>
        </h2>
        <ListProduct
          addProduct={(e: any) => setProduct(e)}
          openModal={() => setShowmodal(!showmodal)}
        />
      </div>
      <Sale />
      <HomeModal
        show={showmodal}
        data={product}
        onclose={() => setShowmodal(!showmodal)}
      />
    </ClientLayout>
  );
}
