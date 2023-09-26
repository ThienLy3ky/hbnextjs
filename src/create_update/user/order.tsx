import useProfilelHook from "@/src/controller/hooks/profile.hook";
import { formatMoney } from "@/src/utils/action.helper";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

const status: any = {
  0: "Đã huỷ",
  1: "Đang xử lý",
  2: "Đang đóng gói",
  3: "Đang giao",
  4: "Hoàn Thành",
};
export default function Order(props: any) {
  const [statusBill, setStatusBill] = useState<number>();
  console.log("🚀 ~ file: order.tsx:15 ~ Order ~ statusBill:", statusBill);
  const { statusShow } = props;
  const { data } = useProfilelHook(statusBill);
  console.log("🚀 ~ file: order.tsx:15 ~ Order ~ data:", data);
  return (
    <>
      <h5 className="mb-3">Đơn hàng của bạn</h5>

      <div className="col-12 badge-info pl-0 list-btn-nav">
        {Array.from({ length: Object.keys(status).length }, (v, i: number) => {
          return (
            <button
              key={i}
              className="btn btn-nav"
              onClick={() => setStatusBill(i)}
            >
              {status[i]}
            </button>
          );
        })}
      </div>
      <div className="card border  mb-4 shadow-0">
        {data
          ? data?.map((item: any) => {
              return (
                <div
                  key={item.code}
                  className="card border border-primary mb-4 shadow-0"
                >
                  <div className="card-body pb-0">
                    <header className="d-lg-flex">
                      <div className="flex-grow-1">
                        <h6 className="mb-0">
                          Mã đơn:
                          <i
                            style={{ color: "blue", textDecoration: "italic" }}
                          >
                            {item.code}
                          </i>
                          <i className="dot"></i>
                          <span className=" text-warning ml-2">
                            {status[item.status]}
                          </span>
                        </h6>
                        <span className="text-muted">
                          Date: 16 December 2022
                        </span>
                      </div>
                      <div>
                        <a href="#" className="btn btn-sm btn-outline-danger">
                          Huỷ đơn
                        </a>
                      </div>
                    </header>
                    <hr />

                    <div className="row">
                      <div className="col-lg-4">
                        <p className="mb-0 text-muted">Thông tin:</p>
                        <p className="m-0">
                          Mike Johnatan <br />
                          Phone: 371-295-9131 <br />
                          Email: info@mywebsite.com
                        </p>
                      </div>
                      <div className="col-lg-4 border-start">
                        <p className="mb-0 text-muted">Địa chỉ giao hàng:</p>
                        <p className="m-0">{item.address}</p>
                      </div>
                      <div className="col-lg-4 border-start">
                        <p className="mb-0 text-muted">Tổng tiền:</p>
                        <p className="m-0">
                          <span className="text-success"> Visa **** 4216 </span>{" "}
                          <br />
                          Shipping fee: $56 <br />
                          Total paid: {formatMoney(item.sumPrice)}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <ul className="row list-unstyled">
                      {item?.Product
                        ? item?.Product?.map((product: any) => {
                            return (
                              <li
                                key={product.product._id}
                                className="col-xl-4 col-lg-6"
                              >
                                <div className="d-flex mb-3 mb-xl-0">
                                  <div className="me-3">
                                    <img
                                      width="72"
                                      height="72"
                                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                                      className="img-sm rounded border"
                                    />
                                  </div>
                                  <div className="">
                                    <p className="mb-0">
                                      {product.product?.name}
                                    </p>
                                    <p className="mb-0">
                                      {product.group?.name}/{product.size?.name}
                                      /{product.style?.name}
                                    </p>
                                    <strong>
                                      {" "}
                                      {product.quanlity} ={" "}
                                      {formatMoney(product.price)}
                                    </strong>
                                  </div>
                                </div>
                              </li>
                            );
                          })
                        : ""}
                    </ul>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
