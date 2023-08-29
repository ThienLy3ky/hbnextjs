import CardProductShort from "@/src/component/card/card.product.short";
import products from "@/src/config/MOCK_DATA.product.json";
import Script from "next/script";
export default function FlashProducts(props: any) {
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
        {/* <a
          style={{
            right: "0px",
            color: "red",
            backgroundColor: "white",
            padding: "0 15px",
          }}
          id="time-count"
        ></a> */}
      </div>

      <div className="row px-xl-5">
        <div className="col" id="my_slider1">
          <div className="owl-carousel related-carousel">
            {products.slice(0, 10).map((product) => (
              <CardProductShort
                openModal={() => props.openModal()}
                product={product}
                key={product.id}
                setCart={() => props.addProduct()}
              />
            ))}
          </div>

          <a className="carousel-prev" href="#/" role="button">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="carousel-next" role="button" href="#/">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
