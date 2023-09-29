import "@/public/static/css/owl-carousel-custom.css";
import CardProductShort from "@/src/component/card/card.product.short";
import dynamic from "next/dynamic";
import CountDownBtn from "../countDown";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  // Do not import in server side
  ssr: false,
});
const options = {
  margin: 5,
  autoplay: true,
  slideBy: "page",
  nav: true,
  dots: false,
  smartSpeed: 800,
  navSpeed: 500,
  autoplayTimeout: 10000,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 5,
    },
  },
};
export default function FlashProducts(props: any) {
  const { data }: { data: any[] } = props;

  return (
    <div className="container-fluid pt-5 pb-3">
      <div
        className="section-title position-relative text-uppercase mx-xl-5 mb-4"
        style={{
          placeContent: " space-between",
          display: "inline-flex",
        }}
      >
        <h2 className="bg-secondary pr-3">Đang giảm giá</h2>
        <a
          style={{
            right: "0px",
            color: "red",
            padding: "0 15px",
          }}
        >
          <CountDownBtn
            time={59 * 60 * 1000 + 59 * 1000}
            setExp={() => {}}
          ></CountDownBtn>
        </a>
      </div>

      <div className="row px-xl-5">
        <div className="col">
          {data && data.length > 0 ? (
            <ReactOwlCarousel className="owl-carousel" {...options}>
              {data?.map((product: any) => (
                <CardProductShort
                  key={product._id}
                  openModal={props.openModal}
                  product={product}
                  setCart={() => props.addProduct(product)}
                />
              ))}
            </ReactOwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
