import DropdownMenu from "@/src/component/dropdown/categori.menu";
import Image from "next/image";
import Script from "next/script";
import { useSelector } from "react-redux";
export default function BannerClient(props: any) {
  const dataSelect = useSelector(
    (state: any) => state.app?.template?.categories
  );
  const { data } = props;
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
                <DropdownMenu data={dataSelect} />
              </div>
              <div className="main col-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tim kiem"
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
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner carousel-text">
                {data
                  ? data.map((item: any) => (
                      <div key={item._id} className="carousel-item active">
                        <div className="row">
                          <div className="col-sm-12">
                            <h1 className="banner_taital">
                              {item.title}
                              <br />
                              {item.content}
                            </h1>
                            <div className="buynow_bt">
                              <a href="#/">Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
              <a
                className="carousel-control-prev"
                href="#my_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#my_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
