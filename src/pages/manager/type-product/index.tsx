import AdminLayout from "@/src/component/layout/client.admin";
import useTypeHook from "@/src/controller/hooks/type.hook";
import TypeModal from "@/src/create_update/admin/type";
import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TypeProduct() {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState({ limit: 25, page: 1 });
  const { data, isLoading } = useTypeHook(query);
  return (
    <AdminLayout title="Loại mặt hàng">
      <div className="col p-0">
        <div className="col d-flex justify-content-between p-2 ">
          <input
            className="form-control col-md-3"
            type="text"
            placeholder="Timf kieems !!"
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => setModal(true)}
            size="small"
            // style={{ height: "calc(2.25rem + 2px)" }}
            endIcon={<i className="mdi mdi-plus"></i>}
          >
            Tao moi
          </Button>
        </div>
        {/* <EnhancedTable /> */}
      </div>
      <TypeModal
        data=""
        title="Loại mặt hàng"
        openModal={modal}
        onclose={setModal}
      />
    </AdminLayout>
  );
}
