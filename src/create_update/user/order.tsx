import Image from "next/image";
import Script from "next/script";

const status: any = {
  0: "Đã huỷ",
  1: "Đang xử lý",
  2: "Đang đóng gói",
  3: "Đang giao",
  4: "Hoàn Thành",
};
export default function Order(props: any) {
  const { statusShow } = props;
  return (
    <>
      <h5 className="mb-3">Đơn hàng của bạn</h5>
      {status ? (
        <div className="col-12 badge-info pl-0 list-btn-nav">
          {Array.from(
            { length: Object.keys(status).length },
            (v, i: number) => {
              return (
                <button key={i} className="btn btn-nav">
                  {status[i]}
                </button>
              );
            }
          )}
        </div>
      ) : (
        ""
      )}
      <div className="card border border-primary mb-4 shadow-0">
        <div className="card-body pb-0">
          <header className="d-lg-flex">
            <div className="flex-grow-1">
              <h6 className="mb-0">
                Order ID: 8924 <i className="dot"></i>
                <span className="text-success"> Shipped</span>
              </h6>
              <span className="text-muted">Date: 16 December 2022</span>
            </div>
            <div>
              <a href="#" className="btn btn-sm btn-outline-danger">
                Cancel order
              </a>
              <a href="#" className="btn btn-sm btn-primary shadow-0">
                Track order
              </a>
            </div>
          </header>
          <hr />
          <div className="row">
            <div className="col-lg-4">
              <p className="mb-0 text-muted">Contact</p>
              <p className="m-0">
                Mike Johnatan <br />
                Phone: 371-295-9131 <br />
                Email: info@mywebsite.com
              </p>
            </div>
            <div className="col-lg-4 border-start">
              <p className="mb-0 text-muted">Shipping address</p>
              <p className="m-0">
                United States <br />
                3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington, DE
                19808
              </p>
            </div>
            <div className="col-lg-4 border-start">
              <p className="mb-0 text-muted">Payment</p>
              <p className="m-0">
                <span className="text-success"> Visa **** 4216 </span> <br />
                Shipping fee: $56 <br />
                Total paid: $456
              </p>
            </div>
          </div>
          <hr />
          <ul className="row list-unstyled">
            <li className="col-xl-4 col-lg-6">
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
                  <p className="mb-0">T-shirts with multiple colors</p>
                  <strong> 2x = $25.98 </strong>
                </div>
              </div>
            </li>
            <li className="col-xl-4 col-lg-6">
              <div className="d-flex mb-3 mb-xl-0">
                <div className="me-3">
                  <img
                    width="72"
                    height="72"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                    className="img-sm rounded border"
                  />
                </div>
                <div className="">
                  <p className="mb-0">Gaming Headset 32db Black</p>
                  <strong> 2x = $339.90 </strong>
                </div>
              </div>
            </li>
            <li className="col-xl-4 col-lg-6">
              <div className="d-flex mb-3 mb-md-0">
                <div className="me-3">
                  <img
                    width="72"
                    height="72"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                    className="img-sm rounded border"
                  />
                </div>
                <div className="">
                  <p className="mb-0">Apple Watch Series 4 Space Gray</p>
                  <strong> 2x = $339.90 </strong>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
