import CartContext from "@/src/component/context/client.context";
import { useState, useEffect, useContext } from "react";
import { addCart } from "@/src/utils/cart.client";
import { formatMoney } from "@/src/utils/action.helper";
import Image from "next/image";

interface propsIF {
  name: string;
  image: string;
  rate: number;
  oldPrice: number;
  newPrice: number;
  totalRate: number;
  id: string;
}
export default function CardImage(props: any) {
  return (
    <div className="product-img position-relative overflow-hidden d-flex justify-content-center">
      <img
        className="img-fluid"
        style={{ width: "unset" }}
        src={props.src}
        alt=""
        width={10}
        height={10}
      />
    </div>
  );
}
