import ClientLayout from "../component/layout/client.layout";
import BannerClient from "@/src/component/banner/banner.client";
import Categories from "../component/categories/categori";
import FlashProducts from "../component/product-flash/products.flash";
import Sale from "../component/sale/sale";
import Feature from "../component/header/feature";
import TestProduct from "./home/test.component";
import HomeSlide from "../component/slide/slide.home";
import ListProduct from "../component/list-product-client/list.product";
export default function home() {
  return (
    <ClientLayout>
      <BannerClient />
      <Feature />
      <HomeSlide />
      <Categories />
      {/* <TestProduct /> */}
      <FlashProducts />
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Sản phẩm mới</span>
        </h2>
        <ListProduct />
      </div>
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Sản phẩm tin dùng</span>
        </h2>
        <ListProduct />
      </div>
      <Sale />
    </ClientLayout>
  );
}
