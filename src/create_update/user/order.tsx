import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import UserService from "@/src/controller/api/user";
import useProfilelHook from "@/src/controller/hooks/profile.hook";
import { formatMoney } from "@/src/utils/action.helper";
import Image from "next/image";
import Link from "next/link";
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
  const [loading, setLoading] = useState(false);
  const { data, refetch } = useProfilelHook(statusBill);
  const handleCancel = async (code: string) => {
    if (loading) return;
    setLoading(true);
    const res = await UserService.cancelOrder(code);
    if (res) {
      showNotificationSuccess("Đã huỷ đơn");
      refetch();
      return;
    }
    showNotificationError("Lỗi huỷ đơn");
    setLoading(false);
  };
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
        {data && data.length > 0 ? (
          data?.map((item: any) => {
            const {
              provice = "{}",
              ditrict = "{}",
              ward = "{}",
              street = "",
              phone = "",
              name = "",
            } = JSON.parse(item.address);
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
                          style={{
                            color: "blue",
                            textDecoration: "italic",
                          }}
                        >
                          {item.code}
                        </i>
                        <i className="dot"></i>
                        <span className={"ml-2 status-" + item.status}>
                          {status[item.status]}
                        </span>
                      </h6>
                      <span className="text-muted">
                        Date:
                        {new Date(item.createdAt).toLocaleString()}
                      </span>
                    </div>
                    {item?.status < 3 && item?.status > 0 ? (
                      <div>
                        <a
                          href="#"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleCancel(item.code)}
                        >
                          Huỷ đơn
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </header>
                  <hr />

                  <div className="row">
                    <div className="col-md-4">
                      <p className="mb-0 text-muted">Thông tin:</p>
                      <p className="m-0">
                        {name} <br />
                        Phone: {phone} <br />
                      </p>
                    </div>
                    <div className="col-md-4 border-start">
                      <p className="mb-0 text-muted">Địa chỉ giao hàng:</p>
                      <p className="m-0">{` ${street}, ${
                        JSON.parse(ward)?.name ?? ""
                      }, ${JSON.parse(ditrict)?.name ?? ""}, ${
                        JSON.parse(provice)?.name ?? ""
                      }`}</p>
                    </div>
                    <div className="col-md-4 border-start">
                      <p className="mb-0 text-muted">Thanh toán:</p>
                      <p className="m-0">
                        {item?.wasPayment ? (
                          <span className="text-success">Đã thanh toán</span>
                        ) : (
                          <span className="text-warning">Chưa thanh toán</span>
                        )}
                        <br />
                        Tổng: {formatMoney(item.sumPrice)}
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
                              className="col-xl-4 col-lg-6 mb-3"
                            >
                              <div className="d-flex  mb-xl-0">
                                <div className="me-3 mr-2">
                                  <Image
                                    width="72"
                                    height="72"
                                    src={"/static/image/noImage.jpeg"}
                                    className="img-sm rounded border"
                                    alt={product.product?.name}
                                  />
                                </div>
                                <div className="">
                                  <Link
                                    className="mb-0"
                                    href={"/products/" + product.product?.code}
                                  >
                                    {product.product?.name}
                                  </Link>
                                  <p className="mb-0">
                                    {product.group?.name}/{product.size?.name}/
                                    {product.style?.name}
                                  </p>
                                </div>
                              </div>
                              <strong className="ml-2">
                                {product.quanlity} ={formatMoney(product.price)}
                              </strong>
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-12 text-center">Không có đơn hàng nào</div>
        )}
      </div>
    </>
  );
}
