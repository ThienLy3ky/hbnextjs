import NameShop from "component/logo/name";
import * as React from "react";
import CartContext from "component/context/client.context";
import CartDropdown from "page/client/cart/cart.dropdown";
const MenuClient = (props: any) => {
  const { data } = props;
  console.log(data);
  const { carts, setCarts } = React.useContext(CartContext);
  return (
    <div className="container-fluid">
      <div className="banner_bg_main">
        <div className="container-fluid bg-dark menu-animation menu-layer">
          <div className="row px-xl-5">
            <div className="col-lg-12" style={{ padding: "0 5%" }}>
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <NameShop
                  href="#/"
                  className="text-decoration-none d-block d-lg-none"
                />

                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <a href="/" className="nav-item nav-link active">
                      Trang Chủ
                    </a>
                    <a href="/shops" className="nav-item nav-link">
                      Nhãn Hàng
                    </a>
                    <div className="nav-item dropdowns">
                      <a href="/checkout" className="nav-link nav-item">
                        Thanh Toán
                      </a>
                    </div>
                  </div>
                  <div
                    className="navbar-nav ml-auto py-0 d-none d-lg-block"
                    style={{ display: "block !important" }}
                  >
                    <div className="btn px-0 ml-3 no-padding no-margin">
                      <a href="#/" className="btn px-0">
                        <i className="fas fa-heart text-primary"></i>
                      </a>
                      <span
                        className="badge number-noti rounded-circle"
                        style={{ paddingBottom: "2px" }}
                      >
                        0
                      </span>
                    </div>
                    <div className="btn px-0 ml-3 no-padding no-margin">
                      <a
                        className="btn px-0 ml-3 no-padding no-margin"
                        data-toggle="collapse"
                        href="#cart-dropdown"
                      >
                        <i className="fas fa-shopping-cart text-primary"></i>
                      </a>
                      <span
                        className="badge number-noti rounded-circle"
                        style={{ paddingBottom: "2px" }}
                      >
                        {carts && carts?.length ? <b>{carts?.length}</b> : ""}
                      </span>
                      <CartDropdown />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuClient;
