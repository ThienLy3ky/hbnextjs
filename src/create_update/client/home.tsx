import { Fade, Modal } from "@mui/material";
import Image from "next/image";

export default function HomeModal(props: any) {
  return (
    <Modal
      style={{ overflow: "auto" }}
      open={true /* props.openModal */}
      onClose={props.onclose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: "60% " }}
      >
        <div className="modal-content">
          <div className="modal-body" style={{ height: "500px" }}>
            <div className="col-12" style={{ display: "inline-flex" }}>
              <div
                className="col-8 slide"
                style={{ height: "300px", border: "1px black solid" }}
              >
                <Image
                  alt="Hình ảnh"
                  src={"/static/image/noImage.jpeg"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="col-4" style={{ border: "1px darkblue solid" }}>
                <h5>Nhom </h5>
                <div>group check box</div>
                <h5>kich co</h5>
                <h5>kieu dang</h5>
              </div>
            </div>
            <div className="col-12" style={{ display: "inline-flex" }}>
              <div className="col-8 slide">
                <h4 className="col">
                  name <i>3 sao</i>
                </h4>
                <h6>decription</h6>
                <h4>Gia</h4>
              </div>
              <div className="col-4">
                <button>Mua ngay</button>
                <button>Them vao gio hang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
