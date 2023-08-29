import { useState, useEffect } from "react";
import { addCart } from "@/src/utils/cart.client";
import { formatMoney } from "@/src/utils/action.helper";
import Image from "next/image";
import CardImage from "../image/image";
import Link from "next/link";

interface propsIF {
  product: any;
  setCart: any;
}
export default function CardProductShort(props: propsIF) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { product, setCart } = props;

  function RateShow() {
    return;
  }
  return (
    <div className="product-item bg-light mb-4">
      <CardImage src={product.image} />
      <div className="product-action">
        <div className="btn-groups">
          <button
            className="btn btn-slide btn-square btn-cart"
            onClick={() => {
              product.setCarts(
                addCart({
                  name: product.name,
                  image: product.image,
                  code: product.name,
                  price: product.newPrice,
                  id: product.id,
                })
              );
            }}
          ></button>
          <a className="btn btn-slide btn-square btn-heart" href="#/"></a>
        </div>
      </div>
      <div className="col py-4">
        <Link
          title={product.name}
          className="h6 text-decoration-none text-truncate"
          href={"/products/" + name}
        >
          {product.name.slice(0, 30)}
        </Link>
        <div className="d-flex justify-content-betwen mt-2">
          <div className="col-6 no-padding">
            {product.rate}
            <small>({product.totalRate})</small>
          </div>
          <div
            className="col-6 no-padding"
            style={{
              display: "inline-flex",
              placeContent: "flex-end",
            }}
          >
            <h5 className=" no-padding" style={{ color: "red" }}>
              {formatMoney(product.newPrice)}
            </h5>
          </div>
        </div>
        <div className="d-flex justify-content-betwen mt-2">
          <div className="col-6 no-padding">
            {Array(5)
              .fill(1)
              .map((el, index) => {
                if (product.rate < index + 1 && product.rate > index)
                  return (
                    <small
                      key={index}
                      className="fa fa-star-half-alt text-primary mr-1"
                    ></small>
                  );
                if (product.rate < index + 1)
                  return (
                    <small
                      key={index}
                      className="far fa-star text-primary mr-1"
                    ></small>
                  );
                return (
                  <small
                    key={index}
                    className="fa fa-star text-primary mr-1"
                  ></small>
                );
              })}
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
                <i>{formatMoney(product.oldPrice)}</i>
              </del>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
