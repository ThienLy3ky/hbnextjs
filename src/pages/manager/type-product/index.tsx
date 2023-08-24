import AdminLayout from "@/src/component/layout/client.admin";
import EnhancedTable from "@/src/component/table/table.mui";
import TypeService from "@/src/controller/api/type.api";
import { hederTable } from "@/src/controller/constant/interface";
import useTypeHook from "@/src/controller/hooks/type.hook";
import TypeModal from "@/src/create_update/admin/type";
import { Button } from "@mui/material";
import { useState } from "react";

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
    id: "image",
    label: "Hình",
    align: "right",
    sort: true,
    numeric: false,
    disablePadding: false,
  },
];
type Order = "asc" | "desc";
export default function TypeProduct() {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState({
    limit: 0,
    page: 1,
    order: "desc",
    orderBy: "createdAt",
  });
  const [dataEd, setDataEd] = useState();
  const { data, isLoading, refetch } = useTypeHook(query);
  const handleDeleted = async (data: string) => {
    await TypeService.delete(data);
    refetch();
  };
  return (
    <AdminLayout title="Loại mặt hàng">
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
      <TypeModal
        refetch={refetch}
        data={dataEd}
        title="Loại mặt hàng"
        openModal={modal}
        onclose={setModal}
      />
    </AdminLayout>
  );
}
