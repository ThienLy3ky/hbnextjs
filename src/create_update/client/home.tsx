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
        style={{ maxWidth: "80% " }}
      >
        <div className="modal-content">
          <div className="modal-body" style={{ height: "500px" }}>
            <div className="col-12" style={{ display: "inline-flex" }}>
              <div className="col-8 slide">
                <Image
                  alt="Hình ảnh"
                  src={"/static/image/noImage.jpeg"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="col-4">axiosFormData</div>
            </div>
            <div className="col-12" style={{ display: "inline-flex" }}>
              <div className="col-8 slide">content</div>
              <div className="col-4">action</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
