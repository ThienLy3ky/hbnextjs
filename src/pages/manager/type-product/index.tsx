import AdminLayout from "@/src/component/layout/client.admin";
import EnhancedTable from "@/src/component/table/table.mui";
import { Button } from "@mui/material";

export default function TypeProduct() {
  return (
    <AdminLayout title="Loại mặt hàng">
      <div className="col p-0">
        <div className="col d-flex justify-content-between p-2 ">
          <input
            className="form-control"
            type="text"
            placeholder="Timf kieems !!"
            style={{ width: "300px !important" }}
          />
          <Button
            variant="contained"
            color="success"
            style={{ height: "calc(2.25rem + 2px)" }}
            endIcon={<i className="mdi mdi-plus"></i>}
          >
            Tao moi
          </Button>
        </div>
        {/* <EnhancedTable /> */}
      </div>
    </AdminLayout>
  );
}
