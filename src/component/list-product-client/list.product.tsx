import CardProductShort from "@/src/component/card/card.product.short";
import products from "@/src/config/MOCK_DATA.product.json";
export default function ListProduct(props: any) {
  const { data } = props;
  return (
    <div className="row px-xl-5">
      {data.slice(0, 8).map((product: any, index: number) => (
        <div
          className="col-lg-2 col-md-4 col-sm-6 pb-1 card-product"
          key={index}
        >
          <CardProductShort
            product={product.product ?? product}
            openModal={props.openModal}
            setCart={() => props.addProduct(product)}
          />
        </div>
      ))}
    </div>
  );
}
