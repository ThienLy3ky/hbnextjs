import CartContext from "@/src/component/context/client.context";
import ClientLayout from "@/src/component/layout/client.layout";
import Title from "@/src/component/title";
import useUserHook from "@/src/controller/hooks/user.hook";
import { formatMoney } from "@/src/utils/action.helper";
import { getCart } from "@/src/utils/cart.client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CheckOut() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    setCarts(getCart());
  }, []);
  const { data, isLoading, refetch } = useUserHook();
  let sumPrice = 0,
    ship = 20000;
  return (
    <ClientLayout>
      <Title
        nameLink={{ name: "Trang Chủ", link: "/" }}
        namePage="Thanh toán"
      />
      <div className="container-fluid">
        <div className=" px-xl-5">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Thông tin đơn hàng</span>
          </h5>
          <div className="bg-light p-30 mb-5">
            <div className="border-bottom">
              <h6 className="mb-3">Sản phẩm</h6>
              {carts ? (
                carts.map(
                  (cart: any, index: number) => (
                    (sumPrice = sumPrice + cart?.quanlity * cart?.priceNew),
                    (
                      <div
                        key={index}
                        className="d-flex justify-content-between"
                      >
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <Image
                              src={cart.image}
                              className="img-fluid rounded-3"
                              alt="Shopping item"
                              width={65}
                              height="65"
                            />
                          </div>
                          <div className="ms-3 col">
                            <h6 title={cart?.name}>
                              {cart.name?.length > 20
                                ? cart.name?.slice(0, 20) + ".."
                                : cart.name}
                            </h6>
                            <p className="small mb-0">
                              {cart.group?.name},{cart?.style?.name},
                              {cart?.size?.name}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <h5 className="fw-normal mb-0">{cart.quanlity}</h5>
                          </div>
                          <div style={{ width: "80px" }}>
                            <h5 className="mb-0">
                              {formatMoney(cart.priceNew * cart?.quanlity)}
                            </h5>
                          </div>
                          <a href="#!" style={{ color: "#cecece " }}>
                            <i className="fas fa-trash-alt"></i>
                          </a>
                        </div>
                      </div>
                    )
                  )
                )
              ) : (
                <div>
                  <b>Khong co san pham</b>
                </div>
              )}
            </div>
            <div className="border-bottom pt-3 pb-2">
              <div className="d-flex justify-content-between mb-3">
                <h6>Tiền sản phẩm</h6>
                <h6>{formatMoney(sumPrice)}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Phí giao hàng</h6>
                <h6 className="font-weight-medium">{formatMoney(ship)}</h6>
              </div>
            </div>
            <div className="pt-2">
              <div className="d-flex justify-content-between mt-2">
                <h5>Tổng tiền:</h5>
                <h5>{formatMoney(sumPrice + ship)}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Thông tin Chung</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label>Tên</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Số Điện thoại</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="+123 456 789"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Số nhà/ Đường</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=".."
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Thành phố</label>
                  <select className="custom-select">
                    <option>Tp Hồ chí minh</option>
                    <option>Đà nẵng</option>
                    <option>Hà nội</option>
                    <option>Hải phòng</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label>Quận </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=".."
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Huyện</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=".."
                  />
                </div>
                <div className="col-md-12 form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="newaccount"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="newaccount"
                    >
                      Tạo tài khoản
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-5">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Hình thức Thanh toán</span>
              </h5>
              <div className="bg-light p-30">
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="paypal"
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      Chuyển khoản
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="directcheck"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="directcheck"
                    >
                      Thanh toán khi nhận hàng
                    </label>
                  </div>
                </div>
              </div>
              <button className="btn btn-block btn-primary font-weight-bold py-3">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
