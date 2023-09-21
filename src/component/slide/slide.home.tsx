import Image from "next/image";
import Link from "next/link";

export default function HomeSlide(props: any) {
  const { data }: { data: [] } = props;
  return (
    <div className="container-fluid mb-3">
      <div className="row px-xl-5">
        <div className="col-lg-8">
          <div id="header-carousel" className=" mb-30 mb-lg-0">
            {/* <ol className="carousel-indicators">
              <li
                data-target="#header-carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#header-carousel" data-slide-to="1"></li>
              <li data-target="#header-carousel" data-slide-to="2"></li>
              <li data-target="#header-carousel" data-slide-to="3"></li>
            </ol> */}
            <div className="owl-carousel owl-testimonials">
              {data?.map((item: any) => (
                <div key={item._id} className="" style={{ height: "430px" }}>
                  <Image
                    fill
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="position-absolute w-100 h-100"
                    src="/static/image/noImage.jpeg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        {item.title}
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        {item.content}
                      </p>
                      <Link
                        className="btn btn-outline-danger py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href={item.link}
                      >
                        Mua ngay
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          style={{
            maxHeight: "450px",
            overflowY: "auto",
          }}
        >
          {data?.map((item: any) => {
            return (
              <div
                className="product-offer mb-30"
                style={{ height: "200px" }}
                key={item._id}
              >
                <Image
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="img-fluid"
                  src={item?.image ?? "/static/image/noImage.jpeg"}
                  alt=""
                />
                <div className="offer-text">
                  <h6 className="text-white text-uppercase">{item.content}</h6>
                  <h3 className="text-white mb-3">{item.title}</h3>
                  <Link className="btn btn-primary" href={item.link}>
                    Mua ngay
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
