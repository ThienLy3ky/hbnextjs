import CartContext from "@/src/component/context/client.context";
import GroupAddCart from "@/src/component/group/modal.cart";
import { formatMoney, formatNumber } from "@/src/utils/action.helper";
import { addCart } from "@/src/utils/cart.client";
import { Modal } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function HomeModal(props: any) {
  useEffect(() => {
    setPricePr(price ? price[0] : {});
    setQuanlityPr(1);
  }, [props]);
  const product = useContext(CartContext);
  const [pricePr, setPricePr] = useState<any>({});
  const [quanlityPr, setQuanlityPr] = useState(1);
  const { data } = props;
  const { price, name, code, summary, _id } = data;
  price?.forEach(({ priceNew }: any, index: number) => {
    if (priceNew < pricePr?.priceNew) setPricePr(price[index]);
  });
  return (
    <Modal
      style={{ overflow: "auto" }}
      open={props.show}
      onClose={props.onclose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: "70% " }}
      >
        <div className="modal-content">
          <div
            className="modal-body"
            style={{
              minHeight: "500px",
              background: "#edeef6",
              borderRadius: "10px",
            }}
          >
            <div
              className="col-12 p-0"
              style={{ display: "inline-flex", background: "white" }}
            >
              <div
                className="col-8 slide p-0"
                style={{ height: "400px", border: "1px black solid" }}
              >
                <Image
                  alt="Hình ảnh"
                  src={pricePr?.image ?? "/static/image/noImage.jpeg"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className="col-12 p-0 align-self-end"
                  style={{
                    position: "absolute",
                    overflow: "auto",
                    bottom: "1px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {price?.map((element: any, index: number) =>
                    element.image ? (
                      <Image
                        key={index}
                        src={element?.image ?? "/static/image/noImage.jpeg"}
                        // fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="mr-2"
                        width={90}
                        height={90}
                        alt={name}
                        onClick={() => setPricePr(element)}
                      />
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
              <GroupAddCart data={price} value={pricePr} />
            </div>
            <h3
              className="col-12 "
              style={{ display: "inline-flex", background: "white" }}
            >
              {name}
            </h3>
            <div
              className="col-12 "
              style={{ display: "inline-flex", background: "white" }}
            >
              <div className="col-8 slide ">
                <h6 className="col mb-3 p-0">{summary}</h6>
                <div className="d-flex align-items-center">
                  <div
                    className="input-group quantity mr-3"
                    style={{ width: "130px" }}
                  >
                    <div className="input-group-btn">
                      <button
                        className="btn btn-primary btn-minus"
                        onClick={() => setQuanlityPr(quanlityPr - 1)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="number"
                      className="form-control bg-secondary border-0 text-center"
                      value={quanlityPr}
                      onChange={({ target }) =>
                        setQuanlityPr(formatNumber(target.value))
                      }
                    />
                    <div className="input-group-btn">
                      <button
                        className="btn btn-primary btn-plus"
                        onClick={() => setQuanlityPr(quanlityPr + 1)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <h4 style={{ color: "red" }}>
                    {formatMoney(pricePr.priceNew * quanlityPr)}
                  </h4>
                </div>
              </div>
              <div className="col-4 d-flex align-items-center align-self-center flex-column">
                <button
                  className="col-8 btn btn-danger mb-3 border-success"
                  style={{ borderRadius: "10px", height: "20%" }}
                >
                  {"Mua ngay "}
                  <i className="fas fa-calculator" />
                </button>
                <button
                  className="col-8 btn btn-outline-warning"
                  style={{ borderRadius: "10px", whiteSpace: "normal" }}
                  onClick={() => {
                    product.setCarts(
                      addCart({
                        _id,
                        name,
                        code,
                        quanlity: quanlityPr,
                        size: pricePr.size,
                        style: pricePr.style,
                        group: pricePr.group,
                        priceNew: pricePr.priceNew,
                        image: pricePr.image,
                      })
                    ),
                      props.onclose();
                  }}
                >
                  Thêm vào giỏ
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
