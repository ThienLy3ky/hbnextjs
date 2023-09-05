import Link from "next/link";
import { useSelector } from "react-redux";

export default function Footer() {
  const Settings = useSelector((state: any) => state?.app?.template?.setting);
  return (
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <h5 className="text-secondary text-uppercase mb-4">
            Health and Beautyfull
          </h5>
          <p className="mb-4">{Settings?.description}</p>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3"></i>
            {Settings?.address}
          </p>
          <Link href={"mailto:" + Settings?.email} className="mb-2">
            <i className="fa fa-envelope text-primary mr-3"></i>
            {Settings?.email}
          </Link>
          <p className="mb-0">
            <Link href={"tel:+84-" + Settings?.SDT} className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3"></i>
              {Settings?.SDT}
            </Link>
          </p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-8 mb-5">
              <h5 className="text-secondary text-uppercase mb-4">Gợi ý</h5>
            </div>

            <div className="col-md-4 mb-5">
              <h5 className="text-secondary text-uppercase mb-4">Phản hồi</h5>
              <p>
                Giải đáp mọi thông tin, phản ánh của quý khách trong thời gian
                nhanh nhất
              </p>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                  <div className="input-group-append">
                    <Link
                      href={"mailto:" + Settings?.email}
                      className="btn btn-primary"
                    >
                      Gửi
                    </Link>
                  </div>
                </div>
              </form>
              <h6 className="text-secondary text-uppercase mt-4 mb-3">
                Tìm hiểu thêm về chúng tôi
              </h6>
              <div className="d-flex">
                <a className="btn btn-primary btn-square mr-2" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-primary btn-square mr-2"
                  href={Settings?.FBlink}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-primary btn-square mr-2" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-primary btn-square" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row border-top mx-xl-5 py-4"
        style={{ borderColor: " rgba(256, 256, 256, .1) !important" }}
      >
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-secondary">
            <a>
              <i className="fa-solid fa-code"></i>
            </a>
            <a className="text-primary" href="#">
              Domain .
            </a>
            Designed by
            <a className="text-primary" href="tl.com">
              . TL .
            </a>
          </p>
        </div>
        {/* <div className="col-md-6 px-xl-0 text-center text-md-right">
        <img className="img-fluid" src="/image/img/payments.png" alt="" />
      </div> */}
      </div>
    </div>
  );
}
