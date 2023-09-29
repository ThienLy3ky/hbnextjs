import { CircularProgress, Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Provices from "@/src/config/tinh_tp.json";
import Districts from "@/src/config/quan_huyen.json";
import Wards from "@/src/config/xa_phuong.json";
import { json } from "stream/consumers";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import UserService from "@/src/controller/api/user";
export default function AddressModal(props: any) {
  const { show, onclose, data = [], setData } = props;
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    provice: "{}",
    ditrict: "{}",
    ward: "{}",
    street: "",
    phone: "",
    name: "",
  });
  const districts = Districts.filter(
    ({ parent_code }) => parent_code === JSON.parse(address.provice).code
  );
  const wards = Wards.filter(
    ({ parent_code }) => parent_code === JSON.parse(address.ditrict).code
  );
  useEffect(() => {}, []);
  const handleAdd = async () => {
    if (loading) return;
    if (
      address.name === "" ||
      address.phone === "" ||
      address.street === "" ||
      address.provice === "{}" ||
      address.ditrict === "{}" ||
      address.ward === "{}"
    ) {
      showNotificationError("Dữ liệu chưa chính xác");
      return;
    }
    setLoading(true);
    const res = await UserService.addAddress(JSON.stringify(address));
    if (!res) showNotificationError("Loi tao moi");
    showNotificationSuccess("Tao thanh cong");
    setData(JSON.stringify(address));
    data.push(JSON.stringify(address));
    setLoading(false);
    onclose();
  };
  return (
    <Modal
      style={{ overflow: "auto" }}
      open={show}
      onClose={onclose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: "70% " }}
      >
        <div className="modal-content">
          <div
            className="tab-content modal-body "
            style={{
              background: "white",
              borderRadius: "10px",
            }}
          >
            <nav className="nav nav-tabs col-12 d-inline-flex font-weight-bold border p-0 mb-3 ">
              <a
                className="col-6 nav-link my-0 active"
                data-toggle="tab"
                href="#tab-pane-address"
              >
                Địa chỉ nhận hàng
              </a>
              <a
                className="col-6 nav-link my-0"
                data-toggle="tab"
                href="#tab-pane-create"
              >
                Thêm địa chỉ mới
              </a>
            </nav>
            <div className=" tab-pane fade show active" id="tab-pane-address">
              {data?.map((item: any, index: number) => {
                const {
                  provice = "{}",
                  ditrict = "{}",
                  ward = "{}",
                  street = "",
                  phone = "",
                  name = "",
                } = JSON.parse(item);
                return (
                  <div
                    key={index}
                    className="col-12 form-group border border-primary"
                    onClick={() => setData(item)}
                  >
                    <div>
                      <i className="fa-regular fa-address-card"></i>:{" "}
                      <b className=" text-info">{name}</b>
                    </div>
                    <div>
                      <i className="fa-solid fa-mobile-screen-button"></i>:{" "}
                      <b className=" text-primary">{phone}</b>
                    </div>
                    <div>
                      <i className="fa-solid fa-map-location-dot"></i>:{" "}
                      <b className=" text-blue">
                        {street},{JSON.parse(ward)?.name ?? ""},
                        {JSON.parse(ditrict)?.name ?? ""},
                        {JSON.parse(provice)?.name ?? ""}
                      </b>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="tab-pane fade" id="tab-pane-create">
              <div className="row ">
                <div className="col-md-6 form-group">
                  <label>Tên</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="John"
                    onChange={({ target }) =>
                      setAddress({ ...address, name: target.value })
                    }
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Số Điện thoại</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="+123 456 789"
                    onChange={({ target }) =>
                      setAddress({ ...address, phone: target.value })
                    }
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Số nhà/ Đường</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=".."
                    value={address.street}
                    onChange={({ target }) =>
                      setAddress({ ...address, street: target.value })
                    }
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Tỉnh/Thành phố</label>
                  <select
                    className="custom-select"
                    onChange={({ target }) =>
                      setAddress({ ...address, provice: target.value })
                    }
                  >
                    {Provices.map(({ name, code }: any) => {
                      return (
                        <option
                          key={code}
                          value={JSON.stringify({ name, code })}
                        >
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label>TP/Huyện </label>
                  <select
                    className="custom-select"
                    onChange={({ target }) =>
                      setAddress({ ...address, ditrict: target.value })
                    }
                  >
                    {districts.map(({ name, code }: any) => {
                      return (
                        <option
                          key={code}
                          value={JSON.stringify({ name, code })}
                        >
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label>Xã/Quận:</label>
                  <select
                    className="custom-select"
                    onChange={({ target }) =>
                      setAddress({ ...address, ward: target.value })
                    }
                  >
                    {wards.map(({ name, code }: any) => {
                      return (
                        <option
                          key={code}
                          value={JSON.stringify({ name, code })}
                        >
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={() => handleAdd()}
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
