import CardProductShort from "@/src/component/card/card.product.short";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  // Do not import in server side
  ssr: false,
});
const options = {
  margin: 10,
  autoplay: true,
  slideBy: "page",
  nav: false,
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
export default function SlideIF({ products, openModal, addProduct }: any) {
  return (
    <div className="container-fluid py-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">You May Also Like</span>
      </h2>
      <div className="row px-xl-5">
        <div className="col">
          {products && products.length > 0 ? (
            <ReactOwlCarousel className="owl-carousel" {...options}>
              {products?.slice(0, 10).map((product: any) => (
                <CardProductShort
                  key={product._id}
                  product={product.product ?? product}
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
