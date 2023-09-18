import AdminLayout from "@/src/component/layout/client.admin";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import EnhancedTable from "@/src/component/table/table.mui";
import ProductService from "@/src/controller/api/product.api";
import { hederTable } from "@/src/controller/constant/interface";
import useProductHook from "@/src/controller/hooks/products.hook";
import ProductModal from "@/src/create_update/admin/product";
import {
  Alert,
  Box,
  Button,
  Fade,
  Input,
  Modal,
  Snackbar,
} from "@mui/material";
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
    id: "categories",
    idChil: "name",
    label: "Chủng loại",
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
  const [dateSale, setdateSale] = useState("");
  const [modalSale, setModalSale] = useState(false);
  const [PriceSale, setPriceSale] = useState<number>(0);
  const [query, setQuery] = useState({
    limit: 20,
    page: 1,
    order: "desc",
    orderBy: "createdAt",
  });
  const [dataEd, setDataEd] = useState();
  const [ListSale, setListSale] = useState<string[]>();
  const { data, isLoading, refetch } = useProductHook(query);
  const handleDeleted = (data: string) => {
    console.log(
      "🚀 ~ file: index.tsx:57 ~ handleDeleted ~ data deleted:",
      data
    );
  };
  const handleSale = async () => {
    const req = await ProductService.flashSale({
      ListSale,
      dateSale,
      PriceSale,
    });
    if (!req) {
      showNotificationError("Xãy ra lỗi! hãy thử lại sau");
      return;
    }
    showNotificationSuccess("Thay đổi thành công");
    setModalSale(!modalSale);
    setListSale(undefined);
    return;
  };
  return (
    <AdminLayout title="Quản Lý mặt hàng">
      <div className="col p-0">
        <div className="col d-flex justify-content-between p-2">
          <input
            className="form-control col-md-3"
            type="text"
            placeholder="Tìm kiếm !!"
          />
          <div>
            {!ListSale ? (
              <>
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
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    setListSale([]);
                  }}
                  size="small"
                  // style={{ height: "calc(2.25rem + 2px)" }}
                  endIcon={<i className="mdi mdi-percent"></i>}
                >
                  Flash sale
                </Button>
              </>
            ) : (
              <>
                {ListSale.length > 0 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setModalSale(true);
                    }}
                    size="small"
                    // style={{ height: "calc(2.25rem + 2px)" }}
                    endIcon={<i className="mdi mdi-check-all"></i>}
                  >
                    Lưu
                  </Button>
                ) : (
                  ""
                )}
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setListSale(undefined);
                  }}
                  size="small"
                  // style={{ height: "calc(2.25rem + 2px)" }}
                  endIcon={<i className="mdi mdi-close"></i>}
                >
                  Huỷ
                </Button>
              </>
            )}
          </div>
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
          select={ListSale}
          onselect={(e: string) =>
            ListSale
              ? ListSale?.includes(e)
                ? setListSale(ListSale?.filter((item: string) => e !== item))
                : setListSale([...ListSale, e])
              : {}
          }
        />
      </div>
      <ProductModal
        options={dataSelect}
        refetch={refetch}
        data={dataEd}
        title="Quản lý Mặt hàng"
        openModal={modal}
        onclose={setModal}
      />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={modalSale}
        onClose={() => setModalSale(false)}
      >
        <Fade in={modalSale}>
          <Box sx={style}>
            <h2>Flash sale</h2>
            <div className="content col-12 d-flex justify-content-center">
              <input
                type="date"
                className="form-control"
                value={dateSale}
                min={new Date(new Date().setDate(new Date().getDate() + 1))
                  .toISOString()
                  .slice(0, 10)}
                onChange={({ target }) => setdateSale(target.value)}
              />
              <input
                type="number"
                className="form-control"
                min={0}
                value={PriceSale}
                onChange={({ target }: any) => setPriceSale(target.value)}
                placeholder="%"
                max={99}
              />
            </div>
            <div className="content col-12 mt-2 d-flex justify-content-around">
              <Button className="btn btn-primary" onClick={() => handleSale()}>
                Lưu
              </Button>
              <Button
                className=" btn btn-danger"
                onClick={() => setModalSale(false)}
              >
                Huỷ
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </AdminLayout>
  );
}
const style = {
  position: "absolute" as "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
