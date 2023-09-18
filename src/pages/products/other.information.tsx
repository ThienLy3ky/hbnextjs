import CartContext from "@/src/component/context/client.context";
import { useContext } from "react";

export default function InformationOther(props: any) {
  const product = useContext(CartContext);
  console.log(
    "🚀 ~ file: other.information.tsx:6 ~ InformationOther ~ product:",
    product
  );
  return <></>;
}
