import CartContext from "@/src/component/context/client.context";
import { addCart } from "@/src/utils/cart.client";
import { useContext } from "react";

export default function AddToCart(props: any) {
  const { data } = props;
  const product = useContext(CartContext);
  return (
    <button
      className="btn btn-primary px-3"
      onClick={() => {
        product.setCarts(
          addCart({
            _id: data._id,
            name: data.name,
            code: data.code,
            quanlity: data.quanlity,
            size: data.size,
            style: data.style,
            group: data.group,
            priceNew: data.priceNew,
            image: data.image,
          })
        );
      }}
    >
      <i className="fa fa-shopping-cart mr-1"></i> Thêm vào giỏ
    </button>
  );
}
