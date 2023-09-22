import ClientLayout from "@/src/component/layout/client.layout";
import useUserHook from "@/src/controller/hooks/user.hook";
import CartDetail from "@/src/create_update/user/cart";
import Order from "@/src/create_update/user/order";
import Setting from "@/src/create_update/user/setting";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
export default function Account() {
  const { data, isLoading, refetch } = useUserHook();
  console.log("🚀 ~ file: index.tsx:7 ~ Account ~ data:", data);
  return (
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
                <a
                  className="nav-link my-0 "
                  data-toggle="tab"
                  href="#tab-pane-code"
                  style={{ width: "100%", borderBottom: "1px red solid" }}
                >
                  <p className="pb-0 mb-0">Mã giảm giá</p>
                </a>
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
                      <div className="col-md-6">
                        <div className="border p-3 rounded-3 bg-light">
                          <b className="mx-2 text-muted">
                            <i className="fa fa-map-marker-alt"></i>
                          </b>
                          United States, 3601 Old Capitol Trail, Unit A-7, Suite
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="border p-3 rounded-3 bg-light">
                          <b className="mx-2 text-muted">
                            <i className="fa fa-map-marker-alt"></i>
                          </b>
                          Moscow city, Street name, Building lenin, House 77
                        </div>
                      </div>
                    </div>

                    <a href="#" className="btn btn-light border">
                      <i className="me-2 fa fa-plus"></i> Thêm địa chỉ
                    </a>

                    <hr className="my-4" />

                    <Order />
                  </div>
                  <div className="tab-pane fade" id="tab-pane-order">
                    <Order statusShow={"1"} />
                  </div>
                  <div className="tab-pane fade" id="tab-pane-cart">
                    <CartDetail />
                  </div>
                  <div className="tab-pane fade" id="tab-pane-setting">
                    <Setting />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}
