import CartContext from "@/src/component/context/client.context";
import { formatMoney } from "@/src/utils/action.helper";
import {
  decreaseProduct,
  getCart,
  increaseProduct,
  productcart,
  removeProduct,
} from "@/src/utils/cart.client";
import { Checkbox } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function CartDetail({
  showPayment,
  setproductPayment,
  productPayment,
}: {
  showPayment: any;
  setproductPayment: any;
  productPayment?: productcart[];
}) {
  const { carts, setCarts } = useContext(CartContext);
  useEffect(() => {
    // setCarts(getCart());
  }, []);
  let sumPrice = 0,
    ship = 20000;

  productPayment?.forEach(
    (cart: productcart, index: number) =>
      (sumPrice = sumPrice + cart?.quanlity * cart?.priceNew)
  );
  const handleCheck = (target: any, cart: productcart) => {
    if (target.checked)
      productPayment
        ? setproductPayment([...productPayment, cart])
        : setproductPayment([cart]);
    else
      setproductPayment(
        productPayment?.filter(
          (product: productcart, i: number) =>
            !(
              product._id === cart._id &&
              product.group._id === cart.group?._id &&
              product.size._id === cart.size._id &&
              product.style._id === cart.style._id
            )
        )
      );
  };
  return (
    <div className="bg-light p-30 mb-5">
      <div className="border-bottom">
        <h6 className="mb-3">Sản phẩm</h6>
        {carts ? (
          carts.map((cart: productcart, index: number) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <Checkbox onClick={({ target }) => handleCheck(target, cart)} />
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
                    {cart.group?.name},{cart?.style?.name},{cart?.size?.name}
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
                    onClick={() => {
                      setCarts(decreaseProduct(cart));
                      setproductPayment(
                        productPayment?.filter(
                          (product: productcart, i: number) => {
                            if (
                              product._id === cart._id &&
                              product.group._id === cart.group?._id &&
                              product.size._id === cart.size._id &&
                              product.style._id === cart.style._id
                            ) {
                              if (product.quanlity <= 1)
                                productPayment.splice(i, 1);
                              else productPayment[i].quanlity--;
                            }
                            return product;
                          }
                        )
                      );
                    }}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <h5 className="fw-normal mb-0">{cart.quanlity}</h5>
                  <button
                    className="btn"
                    onClick={() => {
                      setCarts(increaseProduct(cart));
                      setproductPayment(
                        productPayment?.filter(
                          (product: productcart, i: number) => {
                            if (
                              product._id === cart._id &&
                              product.group._id === cart.group?._id &&
                              product.size._id === cart.size._id &&
                              product.style._id === cart.style._id
                            ) {
                              if (product.quanlity >= 100) return;
                              productPayment[i].quanlity++;
                            }
                            return product;
                          }
                        )
                      );
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div style={{ width: "150px" }}>
                  <h5 className="mb-0">
                    {formatMoney(cart.priceNew * cart?.quanlity)}
                  </h5>
                </div>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setCarts(removeProduct(cart));
                    setproductPayment(
                      productPayment?.filter(
                        (product: productcart, i: number) => {
                          if (
                            product._id === cart._id &&
                            product.group._id === cart.group?._id &&
                            product.size._id === cart.size._id &&
                            product.style._id === cart.style._id
                          ) {
                            productPayment.splice(i, 1);
                          }
                          return product;
                        }
                      )
                    );
                  }}
                >
                  <i className="fa-solid fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))
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
      <div className="col-12 d-flex justify-content-center">
        {productPayment && productPayment.length > 0 ? (
          <button className="btn btn-success" onClick={() => showPayment()}>
            Thanh toan
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
