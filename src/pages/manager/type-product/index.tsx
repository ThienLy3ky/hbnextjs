import AdminLayout from "@/src/component/layout/client.admin";
import EnhancedTable from "@/src/component/table/table.mui";
import useTypeHook from "@/src/controller/hooks/type.hook";
import { Button } from "@mui/material";
import { useState } from "react";

export default function TypeProduct() {
  const [query, setQuery] = useState({ limit: 25, page: 1 });
  const { data, isLoading } = useTypeHook(query);
  console.log(
    "🚀 ~ file: index.tsx:8 ~ TypeProduct ~ data, isLoading:",
    data,
    isLoading
  );
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
            size="small"
            // style={{ height: "calc(2.25rem + 2px)" }}
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
