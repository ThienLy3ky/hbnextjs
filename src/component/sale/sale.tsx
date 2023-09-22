import Image from "next/image";
import Link from "next/link";

export default function Sale(props: any) {
  const { data } = props;
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="row px-xl-5">
        <div className="col-md-4">
          <div
            className="col-12 p-0"
            style={{ background: "radial-gradient(#e27dd4, #a9b7e991) " }}
          >
            <div className="product-offer mb-30 " style={{ height: "300px" }}>
              <Image
                priority={false}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="img-fluid"
                src={"/static/image/noImage.jpeg"}
                alt=""
              />
            </div>
            <div className="col-12">
              <h3 className="text-white mb-3">{"item?.content"}</h3>

              <h6 className="text-white text-uppercase">{"item.title..."}</h6>
              <Link
                href="/shops"
                className="d-flex justify-content-center btn btn-info"
              >
                Đọc tiếp ..
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="col-12 p-0"
            style={{ background: "radial-gradient(#e27dd4, #a9b7e991) " }}
          >
            <div className="product-offer mb-30 " style={{ height: "300px" }}>
              <Image
                priority={false}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="img-fluid"
                src={"/static/image/noImage.jpeg"}
                alt=""
              />
            </div>
            <div className="col-12" style={{ color: "black" }}>
              <h3 className=" text-danger mb-3">{"Block name"}</h3>

              <h6 className="text-black">{"Block conten"}</h6>
              <Link
                href="/shops"
                className="d-flex justify-content-center btn btn-info"
              >
                Đọc tiếp ..
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="col-12 p-0"
            style={{ background: "radial-gradient(#e27dd4, #a9b7e991) " }}
          >
            <div className="product-offer mb-30 " style={{ height: "300px" }}>
              <Image
                priority={false}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="img-fluid"
                src={"/static/image/noImage.jpeg"}
                alt=""
              />
            </div>
            <div className="col-12">
              <h3 className="text-white mb-3">{"item?.content"}</h3>

              <h6 className="text-white text-uppercase">{"item.title..."}</h6>
              <Link
                href="/shops"
                className="d-flex justify-content-center btn btn-info"
              >
                Đọc tiếp ..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
