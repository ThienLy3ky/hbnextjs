import AdminLayout from "@/src/component/layout/client.admin";
import EnhancedTable from "@/src/component/table/table.mui";
import { hederTable } from "@/src/controller/constant/interface";
import useProductHook from "@/src/controller/hooks/products.hook";
import ProductModal from "@/src/create_update/admin/product";
import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const Head: hederTable[] = [
  {
    id: "name",
    label: "Tên",
    sort: true,
    align: "left",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "code",
    label: "Mã",
    align: "left",
    sort: true,
    numeric: true,
    disablePadding: false,
  },
  {
    id: "type",
    idChil: "name",
    label: "Loại",
    align: "left",
    sort: true,
    numeric: false,
    disablePadding: false,
  },
  {
    id: "summary",
    label: "Tóm Tắt",
    align: "left",
    sort: true,
    numeric: false,
    disablePadding: false,
  },
];
type Order = "asc" | "desc";
export default function ProductAdmin() {
  const dataSelect = useSelector((state: any) => state.app);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState({ status: "error", message: "" });
  const [alert, setAlert] = useState(false);
  const [query, setQuery] = useState({
    limit: 20,
    page: 1,
    order: "desc",
    orderBy: "createdAt",
  });
  const [dataEd, setDataEd] = useState();

  const { data, isLoading, refetch } = useProductHook(query);
  const handleDeleted = (data: string) => {
    console.log(
      "🚀 ~ file: index.tsx:57 ~ handleDeleted ~ data deleted:",
      data
    );
  };
  return (
    <AdminLayout title="Quản Lý mặt hàng">
      <div className="col p-0">
        <div className="col d-flex justify-content-between p-2 ">
          <input
            className="form-control col-md-3"
            type="text"
            placeholder="Tìm kiếm !!"
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setModal(true);
              setDataEd(undefined);
            }}
            size="small"
            // style={{ height: "calc(2.25rem + 2px)" }}
            endIcon={<i className="mdi mdi-plus"></i>}
          >
            Tạo mới
          </Button>
        </div>
        <EnhancedTable
          isPagination={query.limit > 0}
          rows={data.items}
          header={Head}
          isDeleted={true}
          isUpdate={true}
          onUpdate={(data: any) => {
            setModal(true);
            setDataEd(data);
          }}
          onDelete={(data: string) => handleDeleted(data)}
          page={parseInt(data.page)}
          pageSum={data.total}
          setLimit={(e: any) => setQuery({ ...query, limit: e })}
          order={{ order: query.order, orderBy: query.orderBy }}
          setPage={(e: any, page: number) => {
            setQuery({ ...query, page: page + 1 });
          }}
          setOder={(e: any) =>
            setQuery({
              ...query,
              ...e,
              order: e.order === "asc" ? "desc" : "asc",
            })
          }
          limit={parseInt(data.limit)}
        />
      </div>
      <ProductModal
        options={dataSelect}
        refetch={refetch}
        data={dataEd}
        title="Quản lý Mặt hàng"
        openModal={modal}
        onclose={setModal}
        noti={setAlert}
        setStatus={setStatus}
      />
      {status.status === "success" ? (
        <Snackbar
          open={alert}
          autoHideDuration={6000}
          onClose={() => setAlert(false)}
        >
          <Alert
            onClose={() => setAlert(false)}
            severity={"success"}
            sx={{ width: "100%" }}
          >
            {status.message}
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          open={alert}
          autoHideDuration={6000}
          onClose={() => setAlert(false)}
          style={{ background: "red" }}
        >
          <Alert
            onClose={() => setAlert(false)}
            severity={"error"}
            sx={{ width: "100%" }}
          >
            {status.message}
          </Alert>
        </Snackbar>
      )}
    </AdminLayout>
  );
}
