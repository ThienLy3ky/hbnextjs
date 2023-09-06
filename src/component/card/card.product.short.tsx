import { useState, useEffect } from "react";
import { formatMoney } from "@/src/utils/action.helper";
import CardImage from "../image/image";
import Link from "next/link";

interface propsIF {
  product: any;
  setCart?: any;
  openModal?: any;
}
export default function CardProductShort(props: propsIF) {
  const [mounted, setMounted] = useState(false);
  const [price, setPrice] = useState<any>({});

  const { product, setCart, openModal } = props;
  useEffect(() => {
    setMounted(true);
    setPrice(product?.price[0]);
  }, [product]);
  product?.price?.forEach(({ priceNew }: any, index: number) => {
    if (priceNew < price?.priceNew) setPrice(product.price[index]);
  });
  function RateShow() {
    return;
  }
  return (
    <div className="product-item bg-light mb-4">
      <CardImage src={price?.image} />
      {openModal ? (
        <div className="product-action" onClick={setCart}>
          <div className="btn-groups">
            <button
              className="btn btn-slide btn-square btn-cart"
              onClick={openModal}
            ></button>
            <a className="btn btn-slide btn-square btn-heart" href="#/"></a>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="col py-4">
        <a
          title={product?.name}
          className="h6 text-decoration-none text-truncate"
          href={"/products/" + product?.code}
        >
          {product?.name?.slice(0, 30)}
        </a>
        <div className="d-flex justify-content-betwen mt-2">
          <div className="col-6 no-padding">
            {/* {product?.rate}
            <small>({product?.totalRate})</small> */}
          </div>
          <div
            className="col-6 no-padding"
            style={{
              display: "inline-flex",
              placeContent: "flex-end",
            }}
          >
            <h5 className=" no-padding" style={{ color: "red" }}>
              {formatMoney(price ? price?.priceNew : 0)}
            </h5>
          </div>
        </div>
        <div className="d-flex justify-content-betwen mt-2">
          <div className="col-6 no-padding">
            {product?.rate ?? 5}
            <small className="fa fa-star text-primary mr-1"></small>
            <small>({product?.totalRate ?? 1})</small>
          </div>
          <div
            className="col-6 no-padding"
            style={{
              display: "inline-flex",
              placeContent: "flex-end",
            }}
          >
            <h6 className="text-muted mr-2 no-padding no-margin">
              <del>
                <i>{formatMoney(product?.oldPrice)}</i>
              </del>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
