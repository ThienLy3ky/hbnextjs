import Image from "next/image";
import Link from "next/link";

export default function Sale(props: any) {
  const { data } = props;
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="row px-xl-5">
        <span>
          asdas.
          <a> ashh </a>
          asd. asd
        </span>
        {data?.map((item: any) => {
          <div className="col-md-4">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <Image
                priority={false}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="img-fluid"
                src={item.image ?? "/static/image/noImage.jpeg"}
                alt=""
              />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">{item.title}</h6>
                <h3 className="text-white mb-3">{item?.content}</h3>
                <Link href="/shops" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
