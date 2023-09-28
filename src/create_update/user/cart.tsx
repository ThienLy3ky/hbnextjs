import CartContext from "@/src/component/context/client.context";
import { formatMoney } from "@/src/utils/action.helper";
import {
  decreaseProduct,
  getCart,
  increaseProduct,
  removeProduct,
} from "@/src/utils/cart.client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function CartDetail(props: any) {
  const { carts, setCarts } = useContext(CartContext);
  useEffect(() => {
    // setCarts(getCart());
  }, []);
  let sumPrice = 0,
    ship = 20000;
  return (
    <div className="bg-light p-30 mb-5">
      <div className="border-bottom">
        <h6 className="mb-3">Sản phẩm</h6>
        {carts ? (
          carts.map(
            (cart: any, index: number) => (
              (sumPrice = sumPrice + cart?.quanlity * cart?.priceNew),
              (
                <div key={index} className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div style={{ width: "50px" }}>
                      <Image
                        src={
                          cart.image !== ""
                            ? cart.image ?? "/static/image/noImage.jpeg"
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
                    <div
                      style={{ width: "100px" }}
                      className=" d-inline-flex justify-content-center align-items-center"
                    >
                      <button
                        className="btn"
                        onClick={() => setCarts(decreaseProduct(cart))}
                      >
                        -
                      </button>
                      <h5 className="fw-normal mb-0">{cart.quanlity}</h5>
                      <button
                        className="btn"
                        onClick={() => setCarts(increaseProduct(cart))}
                      >
                        +
                      </button>
                    </div>
                    <div style={{ width: "150px" }}>
                      <h5 className="mb-0">
                        {formatMoney(cart.priceNew * cart?.quanlity)}
                      </h5>
                    </div>
                    <button
                      className="btn btn-outline-primary"
                      style={{ color: "#cecece " }}
                      onClick={() => setCarts(removeProduct(cart))}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              )
            )
          )
        ) : (
          <div>
            <b>Không có sản phẩm</b>
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
  );
}
