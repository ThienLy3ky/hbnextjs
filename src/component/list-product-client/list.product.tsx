import CardProductShort from "@/src/component/card/card.product.short";
import products from "@/src/config/MOCK_DATA.product.json";
export default function ListProduct(props: any) {
  return (
    <div className="row px-xl-5">
      {products.slice(0, 8).map((product, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
          <CardProductShort
            product={product}
            openModal={props.openModal}
            setCart={() => props.addProduct()}
            key={product.id}
          />
        </div>
      ))}
    </div>
  );
}
