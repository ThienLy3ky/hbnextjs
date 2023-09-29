import ClientLayout from "@/src/component/layout/client.layout";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import UserService from "@/src/controller/api/user";
import useProfilelHook from "@/src/controller/hooks/profile.hook";
import useUserHook from "@/src/controller/hooks/user.hook";
import AddressModal from "@/src/create_update/client/address";
import CartDetail from "@/src/create_update/user/cart";
import Order from "@/src/create_update/user/order";
import Setting from "@/src/create_update/user/setting";
import { formatMoney } from "@/src/utils/action.helper";
import { productcart } from "@/src/utils/cart.client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CheckOut from "../checkout";
import CheckOutContent from "@/src/create_update/checkout";
const status: any = {
  0: "Đã huỷ",
  1: "Đang xử lý",
  2: "Đang đóng gói",
  3: "Đang giao",
  4: "Hoàn Thành",
};
export default function Account() {
  const { data, isLoading } = useUserHook();
  const { data: bills, refetch } = useProfilelHook(undefined);
  const router = useRouter();
  const [showPayment, setShowPayment] = useState(false);
  const [productPayment, setProductPayment] = useState<productcart[]>();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!data && !isLoading) router.replace("./");
  }, [data, isLoading, router]);

  const handleCancel = async (code: string) => {
    const res = await UserService.cancelOrder(code);
    if (res) {
      showNotificationSuccess("Đã huỷ đơn");
      refetch();
      return;
    }
    showNotificationError("Lỗi huỷ đơn");
  };
  return !isLoading ? (
    <ClientLayout>
      <section className=" bg-light" style={{ paddingTop: "75px " }}>
        <div className="container  mx-2" style={{ maxWidth: "100%" }}>
          <div className="row">
            <div className="col-lg-3 col-xl-3">
              <nav className="nav flex-lg-column w-100 d-flex nav-pills mb-4">
                <a
                  className="nav-link my-0 active"
                  data-toggle="tab"
                  href="#tab-pane-main"
                  style={{ width: "100%", borderBottom: "1px red solid" }}
                >
                  <p className="pb-0 mb-0">Thông tin chung</p>
                </a>
                <a
                  className="nav-link my-0 "
                  data-toggle="tab"
                  href="#tab-pane-order"
                  style={{ width: "100%", borderBottom: "1px red solid" }}
                >
                  <p className="pb-0 mb-0">Đơn hàng</p>
                </a>
                <a
                  className="nav-link my-0 "
                  data-toggle="tab"
                  href="#tab-pane-cart"
                  style={{ width: "100%", borderBottom: "1px red solid" }}
                >
                  <p className="pb-0 mb-0">Giỏ hàng</p>
                </a>
                {/* <a
                  className="nav-link my-0 "
                  data-toggle="tab"
                  href="#tab-pane-code"
                  style={{ width: "100%", borderBottom: "1px red solid" }}
                >
                  <p className="pb-0 mb-0">Mã giảm giá</p>
                </a> */}
                <a
                  className="nav-link my-0 "
                  data-toggle="tab"
                  href="#tab-pane-setting"
                  style={{ width: "100%", borderBottom: "1px red solid" }}
                >
                  <p className="pb-0 mb-0">Cài đặt</p>
                </a>
                <Link
                  className="nav-link my-0 "
                  href="/login"
                  style={{ width: "100%", borderBottom: "1px red solid" }}
                >
                  <p className="pb-0 mb-0">Log out</p>
                </Link>
              </nav>
            </div>

            <main className="col-lg-9 col-xl-9">
              <div className="card p-4 mb-0 shadow-0 border">
                <div className="content-body tab-content">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <Image
                        src={data?.image ?? "/static/image/noImage.jpeg"}
                        className="rounded-circle"
                        height="60"
                        width="60"
                        alt="Avatar"
                      />
                    </div>
                    <div className="pt-2">
                      <h6 className="pt-2">{data?.name}</h6>
                      <p>
                        Email: {data?.accountId?.email}, Phone: +
                        {data?.accountId?.phone}
                      </p>
                    </div>
                  </div>

                  <hr />
                  <div className="tab-pane fade show active" id="tab-pane-main">
                    <div className="row g-2 mb-3">
                      {data?.address?.map((item: any, index: number) => {
                        const {
                          provice = "{}",
                          ditrict = "{}",
                          ward = "{}",
                          street = "",
                          phone = "",
                          name = "",
                        } = JSON.parse(item);
                        return (
                          <div key={index} className="col-md-6 mb-2">
                            <div className="border p-3 rounded-3 bg-light">
                              <div>
                                <b className="mx-2 text-muted">
                                  <i className="fa-solid fa-user"></i>
                                </b>
                                {name} - {phone}
                              </div>
                              <div>
                                <b className="mx-2 text-muted">
                                  <i className="fa-solid fa-location-dot"></i>
                                </b>
                                {` ${street}, ${
                                  JSON.parse(ward)?.name ?? ""
                                }, ${JSON.parse(ditrict)?.name ?? ""}, ${
                                  JSON.parse(provice)?.name ?? ""
                                }`}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <a
                      href="#"
                      className="btn btn-light border"
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      <i className="me-2 fa-solid fa-plus"></i> Thêm địa chỉ
                    </a>

                    <hr className="my-4" />

                    <h5 className="mb-3">Đơn hàng của bạn</h5>
                    {bills
                      ? bills?.slice(0, 5).map((item: any) => {
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
                                      <span
                                        className={"ml-2 status-" + item.status}
                                      >
                                        {status[item.status]}
                                      </span>
                                    </h6>
                                    <span className="text-muted">
                                      Date:
                                      {new Date(
                                        item.createdAt
                                      ).toLocaleString()}
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
                                    <p className="mb-0 text-muted">
                                      Thông tin:
                                    </p>
                                    <p className="m-0">
                                      {name} <br />
                                      Phone: {phone} <br />
                                    </p>
                                  </div>
                                  <div className="col-md-4 border-start">
                                    <p className="mb-0 text-muted">
                                      Địa chỉ giao hàng:
                                    </p>
                                    <p className="m-0">{` ${street}, ${
                                      JSON.parse(ward)?.name ?? ""
                                    }, ${JSON.parse(ditrict)?.name ?? ""}, ${
                                      JSON.parse(provice)?.name ?? ""
                                    }`}</p>
                                  </div>
                                  <div className="col-md-4 border-start">
                                    <p className="mb-0 text-muted">
                                      Thanh toán:
                                    </p>
                                    <p className="m-0">
                                      {item?.wasPayment ? (
                                        <span className="text-success">
                                          Đã thanh toán
                                        </span>
                                      ) : (
                                        <span className="text-warning">
                                          Chưa thanh toán
                                        </span>
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
                                            className="col-xl-4 col-md-6 mb-3"
                                          >
                                            <div className="d-flex  mb-xl-0">
                                              <div className="me-3 mr-2">
                                                <Image
                                                  width="72"
                                                  height="72"
                                                  src={
                                                    "/static/image/noImage.jpeg"
                                                  }
                                                  className="img-sm rounded border"
                                                  alt={product.product?.name}
                                                />
                                              </div>
                                              <div className="">
                                                <Link
                                                  className="mb-0"
                                                  href={
                                                    "/products/" +
                                                    product.product?.code
                                                  }
                                                >
                                                  {product.product?.name}
                                                </Link>
                                                <p className="mb-0">
                                                  {product.group?.name}/
                                                  {product.size?.name}/
                                                  {product.style?.name}
                                                </p>
                                              </div>
                                            </div>
                                            <strong className="ml-2">
                                              {product.quanlity}x =
                                              <i className="text-primary">
                                                {" " +
                                                  formatMoney(product.price)}
                                              </i>
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
                      : ""}
                  </div>
                  <div className="tab-pane fade" id="tab-pane-order">
                    <Order handleCancel={(code: any) => handleCancel(code)} />
                  </div>
                  <div className="tab-pane fade" id="tab-pane-cart">
                    <CartDetail
                      showPayment={() => setShowPayment(true)}
                      setproductPayment={(data: productcart[]) =>
                        setProductPayment(data)
                      }
                      productPayment={productPayment}
                    />
                    <CheckOutContent
                      showMD={showPayment}
                      onclose={() => setShowPayment(false)}
                      data={data}
                      products={productPayment}
                    />
                  </div>
                  <div className="tab-pane fade" id="tab-pane-setting">
                    <Setting data={data} />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <AddressModal
        show={show}
        onclose={() => setShow(false)}
        data={data?.address}
      />
    </ClientLayout>
  ) : (
    ""
  );
}
