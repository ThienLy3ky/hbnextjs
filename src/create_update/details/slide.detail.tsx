import "@/public/static/css/owl-carousel-custom.css";
import dynamic from "next/dynamic";
import Image from "next/image";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  // Do not import in server side
  ssr: false,
});
const options = {
  margin: 10,
  autoplay: true,
  slideBy: "page",
  nav: true,
  dots: false,
  smartSpeed: 800,
  navSpeed: 500,
  autoplayTimeout: 10000,
  items: 1,
};
export default function SlideDetail({ data, name }: any) {
  return (
    <>
      {data && data.length > 0 ? (
        <ReactOwlCarousel className="owl-carousel" {...options}>
          {data?.map((element: any, index: number) => (
            <div style={{ height: "500px" }} key={index}>
              <Image
                className=" h-100"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={
                  element?.image === ""
                    ? "/static/image/noImage.jpeg"
                    : element?.image ?? "/static/image/noImage.jpeg"
                }
                alt={name}
              />
            </div>
          ))}
        </ReactOwlCarousel>
      ) : (
        ""
      )}
    </>
  );
}
