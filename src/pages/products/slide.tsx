import CardProductShort from "@/src/component/card/card.product.short";

export default function SlideIF({ products, openModal, addProduct }: any) {
  return (
    <div className="container-fluid py-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">You May Also Like</span>
      </h2>
      <div className="row px-xl-5">
        <div className="col">
          <div className="owl-carousel related-carousel">
            {products?.slice(0, 10).map((product: any) => (
              <CardProductShort
                key={product._id}
                product={product.product ?? product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
