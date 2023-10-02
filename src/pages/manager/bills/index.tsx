import AdminLayout from "@/src/component/layout/client.admin";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import EnhancedTableBill from "@/src/component/table/bill.table";
import BillService from "@/src/controller/api/bills.api";
import { hederTable } from "@/src/controller/constant/interface";
import useBill from "@/src/controller/hooks/bills.hook";
import { Box, Button, Fade, MenuItem, Modal, Select } from "@mui/material";
import { useState } from "react";
const status: any = {
  0: "Đã huỷ",
  1: "Đang xử lý",
  2: "Đang đóng gói",
  3: "Đang giao",
  4: "Hoàn Thành",
};
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
const Head: hederTable[] = [
  {
    id: "code",
    label: "Mã đơn",
    sort: true,
    align: "left",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "date",
    label: "Thời gian",
    align: "left",
    sort: true,
    numeric: false,
    disablePadding: false,
  },
  {
    id: "",
    label: "Sô lượng ",
    align: "left",
    sort: true,
    numeric: false,
    disablePadding: false,
  },
  {
    id: "sumPrice",
    label: "Tổng tiền",
    align: "left",
    sort: true,
    numeric: false,
    disablePadding: false,
  },
  {
    id: "status",
    label: "Trạng thái",
    align: "left",
    sort: true,
    numeric: false,
    disablePadding: false,
  },
  {
    id: "wasPayment",
    label: "Thanh toán",
    align: "left",
    sort: true,
    numeric: false,
    disablePadding: false,
  },
];
type Order = "asc" | "desc";
export default function Bills() {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState({
    limit: 0,
    page: 1,
    order: "desc",
    orderBy: "createdAt",
  });
  const [dataEd, setDataEd] = useState();
  const [statusBill, setStatusBill] = useState<{ id: string; value: any }>({
    id: "",
    value: 0,
  });
  const [showStatusBill, setShowStatusBill] = useState(false);

  const [paymentBill, setPaymentBill] = useState({
    id: "",
    value: false,
  });
  console.log("🚀 ~ file: index.tsx:100 ~ Bills ~ paymentBill:", paymentBill);
  const [showPaymentBill, setShowPaymentBill] = useState(false);
  const { data, isLoading, refetch } = useBill(query);
  const handleUpdateStatus = async () => {
    const res = await BillService.updateStatus(statusBill.id, {
      status: statusBill?.value,
    });
    if (res) showNotificationSuccess("Thay đổi thành công");
    else showNotificationError("Thay đổi lỗi");
    refetch();
    setShowStatusBill(false);
  };
  const handleUpdatePayment = async () => {
    const res = await BillService.updatePayment(paymentBill.id, {
      status: !paymentBill.value,
    });
    if (res) showNotificationSuccess("Thay đổi thành công");
    else showNotificationError("Thay đổi lỗi");
    refetch();
    setShowPaymentBill(false);
  };
  return (
    <AdminLayout title="Đơn hàng">
      <div className="col p-0">
        <div className="col d-flex justify-content-between p-2 ">
          <input
            className="form-control col-md-3"
            type="text"
            placeholder="Tìm kiếm !!"
          />
        </div>
        <EnhancedTableBill
          setStatus={(e: any) => {
            setStatusBill(e);
            setShowStatusBill(true);
          }}
          setPayment={(e: any) => {
            setPaymentBill(e);
            setShowPaymentBill(true);
          }}
          isPagination={query.limit > 0}
          rows={data.items}
          header={Head}
          isDeleted={true}
          isUpdate={true}
          onUpdate={(data: any) => {
            setModal(true);
            setDataEd(data);
          }}
          onDelete={(data: string) => {}}
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
          changePayment={(data: any) => {
            setShowPaymentBill(true);
            setPaymentBill(data);
          }}
          changeStatus={() => {}}
          limit={parseInt(data.limit)}
        />
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={showStatusBill}
        onClose={() => setShowStatusBill(false)}
      >
        <Fade in={showStatusBill}>
          <Box sx={style}>
            <h2>Trạng thái đơn hàng</h2>
            <div className="content col-12 d-flex justify-content-center">
              <Select
                value={statusBill?.value}
                onChange={({ target }) =>
                  setStatusBill({ ...statusBill, value: target?.value })
                }
              >
                <MenuItem value={0}>{status[0]}</MenuItem>
                <MenuItem value={1}>{status[1]}</MenuItem>
                <MenuItem value={2}>{status[2]}</MenuItem>
                <MenuItem value={3}>{status[3]}</MenuItem>
                <MenuItem value={4}>{status[4]}</MenuItem>
              </Select>
            </div>
            <div className="content col-12 mt-2 d-flex justify-content-around">
              <Button className="btn btn-primary" onClick={() => {}}>
                Next
              </Button>
              <Button className="btn btn-primary" onClick={handleUpdateStatus}>
                Lưu
              </Button>
              <Button
                className=" btn btn-danger"
                onClick={() => setShowStatusBill(false)}
              >
                Huỷ
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={showPaymentBill}
        onClose={() => setShowPaymentBill(false)}
      >
        <Fade in={showPaymentBill}>
          <Box sx={style}>
            <h2>Trạng thái thanh toán</h2>
            <div className="content col-12 d-flex justify-content-center">
              Xác nhận thanh toán
            </div>
            <div className="content col-12 mt-2 d-flex justify-content-around">
              <Button
                className="btn btn-primary"
                onClick={() => handleUpdatePayment()}
              >
                Đã thanh toán
              </Button>
              <Button
                className=" btn btn-danger"
                onClick={() => setShowPaymentBill(false)}
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
