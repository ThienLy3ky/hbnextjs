import GroupAddCart from "@/src/component/group/modal.cart";
import { Modal } from "@mui/material";
import Image from "next/image";

export default function HomeModal(props: any) {
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
            style={{ minHeight: "500px", background: "#edeef6" }}
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
                  src={"/static/image/noImage.jpeg"}
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
                  <Image
                    src={"/static/image/noImage.jpeg"}
                    height={60}
                    width={60}
                    className="mr-2"
                    alt="sanr pham"
                  />
                  <Image
                    src={"/static/image/noImage.jpeg"}
                    height={60}
                    width={60}
                    className="mr-2"
                    alt="sanr pham"
                  />
                  <Image
                    src={"/static/image/noImage.jpeg"}
                    height={60}
                    width={60}
                    className="mr-2"
                    alt="sanr pham"
                  />
                  <Image
                    src={"/static/image/noImage.jpeg"}
                    height={60}
                    width={60}
                    className="mr-2"
                    alt="sanr pham"
                  />
                  <Image
                    src={"/static/image/noImage.jpeg"}
                    height={60}
                    width={60}
                    className="mr-2"
                    alt="sanr pham"
                  />
                  <Image
                    src={"/static/image/noImage.jpeg"}
                    height={60}
                    width={60}
                    className="mr-2"
                    alt="sanr pham"
                  />
                </div>
              </div>
              <GroupAddCart />
            </div>
            <h3
              className="col-12 "
              style={{ display: "inline-flex", background: "white" }}
            >
              name
            </h3>
            <div
              className="col-12 "
              style={{ display: "inline-flex", background: "white" }}
            >
              <div className="col-8 slide ">
                <h6 className="col mb-3 p-0">decription</h6>
                <div className="d-flex align-items-center">
                  <div
                    className="input-group quantity mr-3"
                    style={{ width: "130px" }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-primary btn-minus">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="number"
                      className="form-control bg-secondary border-0 text-center"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-primary btn-plus">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <h4 style={{ color: "red" }}>Gia</h4>
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
