import BannerClient from "@/src/component/banner/banner.client";
import Categories from "./home/categori";
import FlashProducts from "./home/products.flash";
import Sale from "./home/sale";
import Feature from "./home/feature";
import TestProduct from "./home/test.component";
import HomeSlide from "./home/slide.home";
import ListProduct from "./home/list.product";
export default function home() {
  return (
    <div>
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
    </div>
  );
}
