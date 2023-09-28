import * as React from "react";
import CartContext from "@/src/component/context/client.context";
import { formatMoney } from "@/src/utils/action.helper";
import Link from "next/link";
import Image from "next/image";
export default function CartDropdown(props: any) {
  const { carts, setCarts } = React.useContext(CartContext);

  let sumPrice = 0,
    ship = 20000;
  return (
    <nav
      id="cart-dropdown"
      className="collapse position-absolute align-items-start col-md-9 col-lag-8 col-xs-12"
      style={{
        right: "0",
        zIndex: "999",
        padding: 0,
      }}
    >
      <div
        className="container py-5 h-100 cart-content no-padding"
        style={{ width: "100%" }}
      >
        <div className="row d-flex justify-content-center align-items-center h-100 no-margin col-12">
          <div className="col no-padding">
            <div
              className="card"
              style={{ border: "1px solid rgb(0 0 0 / 97%)" }}
            >
              <div className="card-body p-4 ">
                <div className="row">
                  <div className="col-lg-7">
                    {carts ? (
                      carts?.map(
                        (cart: any, index: number) => (
                          (sumPrice =
                            sumPrice + cart?.quanlity * cart?.priceNew),
                          (
                            <div className="card mb-3" key={index}>
                              <div
                                className="card-body "
                                style={{ padding: "0 5% 0 0px" }}
                              >
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: "50px" }}>
                                      <Image
                                        src={
                                          cart.image !== ""
                                            ? cart.image ??
                                              "/static/image/noImage.jpeg"
                                            : "/static/image/noImage.jpeg"
                                        }
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
                                      <h5 className="fw-normal mb-0">
                                        {cart.quanlity}
                                      </h5>
                                    </div>
                                    <div style={{ width: "80px" }}>
                                      <h5 className="mb-0">
                                        {formatMoney(
                                          cart.priceNew * cart?.quanlity
                                        )}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )
                      )
                    ) : (
                      <div className="card mb-3"> Chua co san pham</div>
                    )}
                  </div>
                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Tổng số lượng:</p>
                          <p className="mb-2">{carts?.length || 0}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Thành tiền:</p>
                          <p className="mb-2">{formatMoney(sumPrice)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Ship</p>
                          <p className="mb-2">{formatMoney(ship)}</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Tổng số tiền</p>
                          <p className="mb-2">{formatMoney(sumPrice + ship)}</p>
                        </div>

                        <Link
                          type="button"
                          className="btn btn-info btn-block btn-lg"
                          href="/checkout"
                        >
                          Thanh Toán
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
