import NameShop from "@/src/component/logo/name";
import * as React from "react";
import CartContext from "@/src/component/context/client.context";
import CartDropdown from "@/src/pages/cart/cart.dropdown";
import Link from "next/link";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import useUserHook from "@/src/controller/hooks/user.hook";
const MenuClient = (props: any) => {
  const { data, isLoading, refetch } = useUserHook();
  const { carts } = React.useContext(CartContext);
  const router = useRouter();
  const [key, setKey] = React.useState("");
  const handleSearch = (e: any) => {
    e.preventDefault();
    router.replace({
      pathname: "/shops",
      query: { ...router.query, key },
    });
  };
  return !isLoading ? (
    <div className="container-fluid">
      <div className="banner_bg_main">
        <div className="container-fluid bg-dark menu-animation menu-layer">
          <div className="row px-xl-5">
            <div className="col-lg-12" style={{ padding: "0 5%" }}>
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <NameShop
                  href="/"
                  className="text-decoration-none d-block d-lg-none"
                />

                <div
                  className="navbar-nav ml-auto py-0 navbar-toggler"
                  style={{ flexDirection: "row" }}
                >
                  <div className="btn px-0 ml-3 no-padding no-margin">
                    <a
                      className="btn pr-3"
                      data-toggle="collapse"
                      data-target="#navbarSearch"
                    >
                      <i className="fa fa-search text-primary"></i>
                    </a>
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
                  <div className="btn px-0 ml-3">
                    <a
                      className="btn px-0 ml-3 no-padding no-margin"
                      data-toggle="collapse"
                      href="#user-dropdown"
                    >
                      <i className="fas fa-user text-primary"></i>
                    </a>
                    <nav
                      className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                      id="user-dropdown"
                      style={{ zIndex: "999", width: "max-content", right: 0 }}
                    >
                      <div
                        className="navbar-nav w-100"
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        {!(data && data !== "") ? (
                          <Link
                            href={`/login`}
                            className="nav-item nav-link"
                            style={{ color: "black " }}
                          >
                            Đăng nhập
                          </Link>
                        ) : (
                          <>
                            <Link
                              href={`/user`}
                              className="nav-item nav-link "
                              style={{ color: "black " }}
                            >
                              Cài đặt
                            </Link>
                            <Link
                              href={`/login`}
                              className="nav-item nav-link "
                              style={{ color: "black " }}
                            >
                              Đăng xuất
                            </Link>
                          </>
                        )}
                      </div>
                    </nav>
                  </div>
                </div>
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
                    <Link href={"/"} className="nav-item nav-link active">
                      Trang Chủ
                    </Link>
                    <Link href="/shops" className="nav-item nav-link">
                      Nhãn Hàng
                    </Link>
                    <div className="nav-item dropdowns">
                      <Link href="/checkout" className="nav-link nav-item">
                        Thanh Toán
                      </Link>
                    </div>
                  </div>
                  <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                    <div className="btn px-0 ml-3 no-padding no-margin">
                      <a
                        className="btn px-3"
                        data-toggle="collapse"
                        data-target="#navbarSearch"
                      >
                        <i className="fa fa-search text-primary"></i>
                      </a>
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
                    <div className="btn px-0 ml-3">
                      <a
                        className="btn px-0 ml-3 no-padding no-margin"
                        data-toggle="collapse"
                        href="#user-dropdown"
                      >
                        <i className="fas fa-user text-primary"></i>
                      </a>
                      <nav
                        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                        id="user-dropdown"
                        style={{
                          zIndex: "999",
                          width: "max-content",
                          right: 0,
                        }}
                      >
                        <div
                          className="navbar-nav w-100"
                          style={{
                            flexDirection: "column",
                          }}
                        >
                          {!(data && data !== "") ? (
                            <Link
                              href={`/login`}
                              className="nav-item nav-link"
                              style={{ color: "black !important" }}
                            >
                              Đăng nhập
                            </Link>
                          ) : (
                            <>
                              <Link
                                href={`/user`}
                                className="nav-item nav-link "
                                style={{ color: "black" }}
                              >
                                Cài đặt
                              </Link>
                              <Link
                                href={`/login`}
                                className="nav-item nav-link "
                                style={{ color: "black" }}
                              >
                                Đăng xuất
                              </Link>
                            </>
                          )}
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div
              className=" collapse navbar-collapse col-12 p-0 "
              style={{ background: "rgb(204 241 213 / 62%)" }}
              id="navbarSearch"
            >
              <form
                onSubmit={handleSearch}
                className="navbar d-flex justify-content-center p-2"
              >
                <TextField
                  inputMode="search"
                  inputProps={{ style: { background: "white" } }}
                  color="primary"
                  className="col-md-4 col-sm-7"
                  type="text"
                  size="small"
                  placeholder="Tìm kiếm"
                  title="search"
                  name="search"
                  value={key}
                  onChange={({ target }) => setKey(target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default MenuClient;
