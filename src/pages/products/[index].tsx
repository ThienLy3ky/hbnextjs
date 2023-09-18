import CartProvider from "@/src/component/context/client.context";
import ClientLayout from "@/src/component/layout/client.layout";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import useDetailHook from "@/src/controller/hooks/detail.client.hook";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { formatMoney } from "@/src/utils/action.helper";
import { addCart } from "@/src/utils/cart.client";
import InformationOther from "./other.information";
export default function ProductDetail(props: any) {
  const product = useContext(CartProvider);
  const { carts, setCarts } = useContext(CartProvider);
  console.log("🚀 ~ file: [index].tsx:13 ~ ProductDetail ~ carts:", carts);
  console.log("🚀 ~ file: [index].tsx:12 ~ ProductDetail ~ product:", product);
  const [Groups, setGroups] = useState<object[]>([]);
  const [Styles, setStyles] = useState<object[]>([]);
  const [Sizes, setSizes] = useState<object[]>([]);
  const [groups, setGroup] = useState<string>();
  const [styles, setStyle] = useState<string>();
  const [sizes, setSize] = useState<string>();
  const [quanlity, setQuanlity] = useState(1);
  const [PriceProduct, setPriceProduct] = useState<any>({});
  const DynamicHeader = dynamic(() => import("./slide"));
  const router = useRouter();
  const { index = "" } = router.query;
  const rate = Math.random();
  const {
    data: { items, data },
    isLoading,
  } = useDetailHook(index);
  useEffect(() => {
    setSizes([]);
    setStyles([]);
    setGroups([]);
    setPriceProduct(data?.price[0]);
    let sizes: object[] = [],
      styles: object[] = [],
      groups: object[] = [];
    data?.price?.map((price: any) => {
      sizes = [...sizes, price.size];
      styles = [...styles, price.style];
      groups = [...groups, price.group];
      if (price.priceNew < PriceProduct?.priceNew) setPriceProduct(price);
    });
    setSizes([
      ...Sizes,
      ...sizes.filter(
        (v: any, i, a) => a.findIndex((v2: any) => v2._id === v._id) === i
      ),
    ]);
    setStyles([
      ...Styles,
      ...styles.filter(
        (v: any, i, a) => a.findIndex((v2: any) => v2._id === v._id) === i
      ),
    ]);
    setGroups([
      ...Groups,
      ...groups.filter(
        (v: any, i, a) => a.findIndex((v2: any) => v2._id === v._id) === i
      ),
    ]);
  }, [data]);
  const handleChange = ({
    sizeI,
    styleI,
    groupI,
  }: {
    sizeI?: string;
    styleI?: string;
    groupI?: string;
  }) => {
    if (sizeI) setSize(sizeI);
    if (styleI) setStyle(styleI);
    if (groupI) setGroup(groupI);
    if ((sizeI ?? sizes) && (styleI ?? styles) && (groupI ?? groups))
      setPriceProduct(
        data.price.filter(
          ({ size, style, group }: any) =>
            size._id === (sizeI ?? sizes) &&
            (styleI ?? styles) === style._id &&
            (groupI ?? groups) === group._id
        )[0]
      );
  };
  return (
    <ClientLayout>
      <div className="container-fluid pb-5">
        {data ? (
          <>
            <div className="row px-xl-5">
              <div className="col-lg-5 mb-30">
                <div
                  id="product-carousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner bg-light">
                    {data?.price?.map((element: any, index: number) =>
                      element.image ? (
                        <div className="carousel-item active" key={index}>
                          <Image
                            className=" h-100"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            src={element?.image ?? "/static/image/noImage.jpeg"}
                            alt={data?.name}
                          />
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#product-carousel"
                    data-slide="prev"
                  >
                    <i className="fa fa-2x fa-angle-left text-dark"></i>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#product-carousel"
                    data-slide="next"
                  >
                    <i className="fa fa-2x fa-angle-right text-dark"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                  <h3>{data?.name}</h3>
                  <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                      {Array(5)
                        .fill(1)
                        .map((el, index) => {
                          if (rate < index + 1 && rate > index)
                            return (
                              <small
                                key={index}
                                className="fa fa-star-half-alt text-primary mr-1"
                              ></small>
                            );
                          if (rate < index + 1)
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
                    <small className="pt-1">(99 Reviews)</small>
                  </div>
                  <h3
                    className="font-weight-semi-bold"
                    style={{ color: "red" }}
                  >
                    {formatMoney(PriceProduct?.priceNew)}
                  </h3>
                  <small style={{ fontStyle: "revert" }}>
                    {formatMoney(PriceProduct?.priceOld)}
                  </small>
                  <p className="mb-4 mt-3">{data?.summary}</p>
                  <div className="d-flex mb-3">
                    <strong className="text-dark mr-3">Kích cỡ:</strong>
                    <form>
                      {Sizes?.map((element: any, index: number) =>
                        element ? (
                          <div
                            key={index}
                            className="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              type="radio"
                              className="custom-control-input"
                              id={"size" + element?._id}
                              name="size"
                              onChange={() => {
                                handleChange({ sizeI: element._id });
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={"size" + element?._id}
                            >
                              {element?.name}
                            </label>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </form>
                  </div>
                  <div className="d-flex mb-4">
                    <strong className="text-dark mr-3">Kiểu dáng:</strong>
                    <form>
                      {Styles?.map((element: any, index: number) =>
                        element ? (
                          <div
                            key={index}
                            className="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              type="radio"
                              className="custom-control-input"
                              id={"style" + element?._id}
                              name="size"
                              onChange={() => {
                                handleChange({ styleI: element._id });
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={"style" + element?._id}
                            >
                              {element?.name}
                            </label>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </form>
                  </div>
                  <div className="d-flex mb-4">
                    <strong className="text-dark mr-3">Nhóm:</strong>
                    <form>
                      {Groups?.map((element: any, index: number) =>
                        element ? (
                          <div
                            key={index}
                            className="custom-control custom-radio custom-control-inline"
                          >
                            <input
                              type="radio"
                              className="custom-control-input"
                              id={"group" + element?._id}
                              name="size"
                              onChange={() => {
                                handleChange({ groupI: element._id });
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={"group" + element?._id}
                            >
                              {element?.name}
                            </label>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </form>
                  </div>
                  <div className="d-flex align-items-center mb-4 pt-2">
                    <div
                      className="input-group quantity mr-3"
                      style={{ width: "130px" }}
                    >
                      <div className="input-group-btn">
                        <button
                          className="btn btn-primary btn-minus"
                          onClick={() => setQuanlity(quanlity - 1)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="number"
                        className="form-control bg-secondary border-0 text-center"
                        value={quanlity}
                        onChange={({ target: { value } }: any) =>
                          setQuanlity(value)
                        }
                      />
                      <div className="input-group-btn">
                        <button
                          className="btn btn-primary btn-plus"
                          onClick={() => setQuanlity(quanlity + 1)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary px-3"
                      onClick={() => {
                        product.setCarts(
                          addCart({
                            _id: data._id,
                            name: data.name,
                            code: data.code,
                            quanlity: quanlity,
                            size: PriceProduct.size,
                            style: PriceProduct.style,
                            group: PriceProduct.group,
                            priceNew: PriceProduct.priceNew,
                            image: PriceProduct.image,
                          })
                        );
                      }}
                    >
                      <i className="fa fa-shopping-cart mr-1"></i> Thêm vào giỏ
                    </button>
                    <button className="btn btn-danger px-3 ml-2">
                      <i className="fa fa-buysellads mr-1"></i> Mua ngay
                    </button>
                  </div>
                  <div className="d-flex pt-2">
                    <strong className="text-dark mr-2">Share on:</strong>
                    <div className="d-inline-flex">
                      <a className="text-dark px-2" href="#/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="text-dark px-2" href="#/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="text-dark px-2" href="#/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="text-dark px-2" href="#/">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-xl-5">
              <div className="col">
                <div className="bg-light p-30">
                  <div className="nav nav-tabs mb-4">
                    <a
                      className="nav-item nav-link text-dark active"
                      data-toggle="tab"
                      href="#tab-pane-1"
                    >
                      Thông tin chung
                    </a>
                    <a
                      className="nav-item nav-link text-dark"
                      data-toggle="tab"
                      href="#tab-pane-3"
                    >
                      Đánh giá (0)
                    </a>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                      <h4 className="mb-3">Thông tin</h4>
                      <p>{data?.description}</p>
                    </div>

                    <div className="tab-pane fade" id="tab-pane-3">
                      <div className="row">
                        <div className="col-md-6">
                          <h4 className="mb-4">1 review for Product Name</h4>
                          <div className="media mb-4">
                            {/* <img
                              src="img/user.jpg"
                              alt=""
                              className="img-fluid mr-3 mt-1"
                              style={{ width: "45px" }}
                            /> */}
                            <div className="media-body">
                              <h6>
                                John Doe
                                <small>
                                  {" "}
                                  - <i>01 Jan 2045</i>
                                </small>
                              </h6>
                              <div className="text-primary mb-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                              </div>
                              <p>
                                Diam amet duo labore stet elitr ea clita ipsum,
                                tempor labore accusam ipsum et no at. Kasd diam
                                tempor rebum magna dolores sed sed eirmod ipsum.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-4">Leave a review</h4>
                          <small>
                            Your email address will not be published. Required
                            fields are marked *
                          </small>
                          <div className="d-flex my-3">
                            <p className="mb-0 mr-2">Your Rating * :</p>
                            <div className="text-primary">
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                          <form>
                            <div className="form-group">
                              <label htmlFor="message">Your Review *</label>
                              <textarea
                                id="message"
                                cols={30}
                                rows={5}
                                className="form-control"
                              ></textarea>
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Your Name *</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Your Email *</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                              />
                            </div>
                            <div className="form-group mb-0">
                              <input
                                type="submit"
                                value="Leave Your Review"
                                className="btn btn-primary px-3"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <InformationOther />
      {/* <DynamicHeader products={items} openModal={() => {}} nocart={true} /> */}
    </ClientLayout>
  );
}
