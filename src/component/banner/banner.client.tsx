import "@/public/static/css/owl-carousel-custom.css";
import DropdownMenu from "@/src/component/dropdown/categori.menu";
import Image from "next/image";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  // Do not import in server side
  ssr: false,
});
const options = {
  margin: 10,
  items: 1,
  autoplay: true,
  slideBy: "page",
  nav: true,
  dots: false,
  smartSpeed: 800,
  navSpeed: 500,
  autoplayTimeout: 10000,
};
export default function BannerClient(props: any) {
  const dataSelect = useSelector(
    (state: any) => state.app?.template?.categories
  );
  const { data }: { data: any[] } = props;
  const router = useRouter();
  const [key, setKey] = useState<string>("");
  const [categories, setCategories] = useState<string[]>();
  const handleSearch = (e: any) => {
    if (!categories || !key) return;
    router.replace({
      pathname: "/shops",
      query: {
        ...router.query,
        categories: JSON.stringify(categories),
        key,
      },
    });
  };
  return (
    <div className="container-fluid">
      <div className="banner_bg_main" style={{ marginBottom: "20px" }}>
        <div className="logo_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <a href="index.html">
                    <Image
                      src="/static/image/logo192.png"
                      alt=""
                      width={10}
                      height={10}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- logo section end --> */}
        {/* <!-- header section start --> */}
        <div className="header_section">
          <div className="container">
            <div className="containt_main d-flex justify-content-center">
              <div className="dropdown " style={{ paddingRight: "10px" }}>
                <a
                  className="btn btn-success dropdown-toggle"
                  data-toggle="collapse"
                  href="#navbar-vertical"
                  style={{ borderRadius: "0.25rem" }}
                >
                  Danh mục sản phẩm
                </a>
                <DropdownMenu
                  data={dataSelect}
                  onClick={(id: string) => setCategories([id])}
                />
              </div>
              <div className="main col-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm"
                    value={key}
                    onChange={({ target }) => setKey(target.value)}
                    style={{ borderRadius: "0.25rem" }}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      style={{
                        backgroundColor: "#f26522",
                        borderColor: "#f26522",
                        borderRadius: "0.25rem",
                      }}
                      onClick={handleSearch}
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_section layout_padding">
          <div className="container">
            <div className="" style={{ position: "relative" }}>
              {data && data.length > 0 ? (
                <ReactOwlCarousel className="owl-carousel" {...options}>
                  {data.map((item: any) => (
                    <div key={item._id} className="">
                      <div className="row">
                        <div className="col-sm-12">
                          <h1 className="banner_taital">
                            {item.title}
                            <br />
                            {item.content}
                          </h1>
                          <div className="buynow_bt">
                            <a href={item.link}>Mua ngay</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ReactOwlCarousel>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
