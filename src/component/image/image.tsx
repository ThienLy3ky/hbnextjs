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
      <Image
        className="img-fluid"
        src={props.src ?? "/static/image/noImage.jpeg"}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
