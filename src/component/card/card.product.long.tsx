import { useState, useEffect } from "react";
import { formatMoney } from "@/src/utils/action.helper";
import CardImage from "../image/image";
import Link from "next/link";

interface propsIF {
  product: any;
  setCart?: any;
  openModal?: any;
}
export default function CardProductLong(props: propsIF) {
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
    <div className="product-item bg-light mb-4 d-flex">
      <div className="col-4 pl-0">
        <CardImage src={price?.image} />
      </div>

      <div className="col-8 py-4 d-flex align-content-between flex-column">
        <a
          title={product?.name}
          className="h6 text-decoration-none text-truncate"
          href={"/products/" + product?.code}
        >
          {product?.name?.slice(0, 30)}
        </a>
        <i
          style={{ color: "red" }}
        >{`${price.group?.name}  ${price.size?.name} ${price.style?.name}`}</i>
        <p>{product?.description}</p>
        <div className="d-flex justify-content-betwen mt-2"></div>
        <div className="mt-2">
          <div className="col-12 no-padding">
            {/* {product?.rate}
            <small>({product?.totalRate})</small> */}

            <h5 className=" no-padding" style={{ color: "red" }}>
              <del className="p-2 text-muted small">
                <i>{formatMoney(product?.oldPrice)}</i>
              </del>
              {formatMoney(price ? price?.priceNew : 0)}
            </h5>
          </div>
          <div className="col-12 no-padding d-flex justify-content-between">
            <div>
              {product?.rate ?? 5}
              <small className="fa fa-star text-primary mr-1"></small>
              <small>({product?.totalRate ?? 1})</small>
            </div>
            {openModal ? (
              <button
                className="btn btn-outline-danger d-block"
                onClick={openModal}
              >
                Thêm vào giỏ <i className="fa fa-cart-arrow-down"></i>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
