import CartProvider from "@/src/component/context/client.context";
import ClientLayout from "@/src/component/layout/client.layout";
import { useRouter } from "next/router";
import useDetailHook from "@/src/controller/hooks/detail.client.hook";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { formatMoney } from "@/src/utils/action.helper";
import AddToCart from "@/src/create_update/client/addCart";
import SlideIF from "../../create_update/details/slide";
import Title from "@/src/component/title";
import Review from "@/src/create_update/details/review";
import Link from "next/link";
import SlideDetail from "@/src/create_update/details/slide.detail";
// import SlideIF from "./slide";
export default function ProductDetail(props: any) {
  const product = useContext(CartProvider);
  const { carts, setCarts } = useContext(CartProvider);
  const [Groups, setGroups] = useState<object[]>([]);
  const [Styles, setStyles] = useState<object[]>([]);
  const [Sizes, setSizes] = useState<object[]>([]);
  const [groups, setGroup] = useState<string>();
  const [styles, setStyle] = useState<string>();
  const [sizes, setSize] = useState<string>();
  const [quanlity, setQuanlity] = useState(1);
  const [PriceProduct, setPriceProduct] = useState<any>({});

  const router = useRouter();
  const { index = "" } = router.query;
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
  return !isLoading ? (
    <ClientLayout>
      <Title
        nameLink={{ name: "Trang Chủ", link: "/" }}
        namePage={data?.name}
      />
      <div className="container-fluid pb-5">
        {data ? (
          <>
            <div className="row px-xl-5">
              <div className="col-lg-5 mb-30">
                <SlideDetail data={data?.price} name={data?.name} />
              </div>

              <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                  <h3>{data?.name}</h3>
                  <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                      {Array(5)
                        .fill(1)
                        .map((el, index) => {
                          if (data?.rate < index + 1 && data?.rate > index)
                            return (
                              <small
                                key={index}
                                className="fa-solid fa-star-half-alt text-primary mr-1"
                              ></small>
                            );
                          if (data?.rate < index + 1)
                            return (
                              <small
                                key={index}
                                className="far fa-star text-primary mr-1"
                              ></small>
                            );
                          return (
                            <small
                              key={index}
                              className="fa-solid fa-star text-primary mr-1"
                            ></small>
                          );
                        })}
                    </div>
                    <small className="pt-1">
                      ({data?.review?.length ?? 1})
                    </small>
                  </div>
                  <h3
                    className="font-weight-semi-bold"
                    style={{ color: "red" }}
                  >
                    {formatMoney(PriceProduct?.priceNew)}
                  </h3>
                  <small style={{ fontStyle: "revert" }}>
                    {formatMoney(PriceProduct?.priceOlder)}
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
                          <i className="fa-solid fa-minus"></i>
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
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <AddToCart
                      data={{
                        _id: data._id,
                        name: data.name,
                        code: data.code,
                        quanlity: quanlity,
                        size: PriceProduct?.size,
                        style: PriceProduct?.style,
                        group: PriceProduct?.group,
                        priceNew: PriceProduct?.priceNew,
                        image: PriceProduct?.image,
                      }}
                    />
                    <button className="btn btn-danger px-3 ml-2">
                      <i className="fa-solid fa-buysellads mr-1"></i> Mua ngay
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
                      Đánh giá ({data?.review?.length ?? 1})
                    </a>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                      <h5>{data?.summary}</h5>
                      <p>{data?.description}</p>
                      <div className="d-flex flex-nowrap">
                        <h5 className="mr-1 p-1">Keyword:</h5>

                        {data?.keyWord?.map((e: string) => {
                          return (
                            <Link
                              href={"/shops?key=" + e}
                              key={e}
                              className="btn btn-secondary"
                            >
                              {e}
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab-pane-3">
                      <div className="row">
                        <div
                          className="col-md-6"
                          style={{ maxHeight: "500px" }}
                        >
                          <h4 className="mb-4">
                            {data?.review?.length ?? 1} review
                          </h4>

                          {/* <img
                              src="img/user.jpg"
                              alt=""
                              className="img-fluid mr-3 mt-1"
                              style={{ width: "45px" }}
                            /> */}
                          {data?.review?.map(
                            ({
                              accountId,
                              comment,
                              rate,
                              date,
                            }: {
                              accountId: string;
                              comment: string;
                              rate: number;
                              date: any;
                            }) => {
                              return (
                                <div key={accountId} className="media mb-4">
                                  <div className="media-body">
                                    <h6>
                                      {accountId}
                                      <small>
                                        - <i>{date}</i>
                                      </small>
                                    </h6>
                                    <div className="text-primary mb-2">
                                      {Array(5)
                                        .fill(1)
                                        .map((el, index) => {
                                          if (rate < index + 1 && rate > index)
                                            return (
                                              <small
                                                key={index}
                                                className="fa-solid fa-star-half-alt text-primary mr-1"
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
                                              className="fa-solid fa-star text-primary mr-1"
                                            ></small>
                                          );
                                        })}
                                    </div>
                                    <p>{comment}</p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                        <div className="col-md-6">
                          <Review />
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
      <SlideIF products={items} openModal={() => {}} nocart={true} />
      {/* <DynamicHeader products={items} openModal={() => {}} nocart={true} /> */}
    </ClientLayout>
  ) : (
    ""
  );
}
