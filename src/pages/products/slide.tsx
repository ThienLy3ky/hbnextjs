import CardProductShort from "@/src/component/card/card.product.short";

export default function SlideIF({ products }: any) {
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
                name={product.name}
                image={product.image}
                rate={3.3}
                oldPrice={product.priceOlder}
                newPrice={product.priceNew}
                totalRate={40}
                id={product.id.toString()}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
