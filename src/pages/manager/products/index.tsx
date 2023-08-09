import AdminLayout from "@/src/component/layout/client.admin";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";

export default function Darboard() {
  return (
    <AdminLayout>
      <ModalAdmin name="open">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Modal title
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </ModalAdmin>
    </AdminLayout>
  );
}
