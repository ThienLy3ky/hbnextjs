import Image from "next/image";

export default function HomeSlide(props: any) {
  const { data } = props;
  return (
    <div className="container-fluid mb-3">
      <div className="row px-xl-5">
        <div className="col-lg-8">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade mb-30 mb-lg-0"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#header-carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#header-carousel" data-slide-to="1"></li>
              <li data-target="#header-carousel" data-slide-to="2"></li>
              <li data-target="#header-carousel" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              {data?.map((item: any) => (
                <div
                  key={item._id}
                  className="carousel-item position-relative active"
                  style={{ height: "430px" }}
                >
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="position-absolute w-100 h-100"
                    src="https://highlandsoncology.com/wp-content/uploads/Highlands_PharmacyBanner-1536x576.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Men Fashion
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#/"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="carousel-item position-relative"
                style={{ height: "430px" }}
              >
                <img
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="position-absolute w-100 h-100"
                  src="https://media.istockphoto.com/id/1049599704/vi/anh/d%C6%B0%E1%BB%A3c-s%C4%A9-s%E1%BB%AD-d%E1%BB%A5ng-m%C3%A1y-t%C3%ADnh-x%C3%A1ch-tay-t%E1%BA%A1i-nh%C3%A0-thu%E1%BB%91c.jpg?s=612x612&w=0&k=20&c=BH1R9h5yPBb9owbXk3xcbGQf7WAkoA_Ezhm93876Zbk="
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Women Fashion
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      Lorem rebum magna amet lorem magna erat diam stet. Sadips
                      duo stet amet amet ndiam elitr ipsum diam
                    </p>
                    <a
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="#/"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item position-relative"
                style={{ height: "430px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="https://media.istockphoto.com/id/1308548933/vi/vec-to/n%E1%BB%81n-bi%E1%BB%83u-ng%E1%BB%AF-ch%C4%83m-s%C3%B3c-s%E1%BB%A9c-kh%E1%BB%8Fe.jpg?s=612x612&w=0&k=20&c=frBGDhqKia7vFC4Z0GVnQdqI8lSACXrKflTair6MiyI="
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Kids Fashion
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      Lorem rebum magna amet lorem magna erat diam stet. Sadips
                      duo stet amet amet ndiam elitr ipsum diam
                    </p>
                    <a
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="#/"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item position-relative"
                style={{ height: "430px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="https://shoppertainment.ph/cdn/shop/files/Shoppertainment_May_A4_article_bannerr_desktop_30d9a72f-e2fd-4a17-ab70-2d75ece248ff.jpg?v=1653447669"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Kids Fashion
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      Lorem rebum magna amet lorem magna erat diam stet. Sadips
                      duo stet amet amet ndiam elitr ipsum diam
                    </p>
                    <a
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="#/"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="product-offer mb-30" style={{ height: "200px" }}>
            <img className="img-fluid" src="/image/img/offer-1.jpg" alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="#/" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
          <div className="product-offer mb-30" style={{ height: "200px" }}>
            <img className="img-fluid" src="/image/img/offer-2.jpg" alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="#/" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
