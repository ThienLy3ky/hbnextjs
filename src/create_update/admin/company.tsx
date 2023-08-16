import InputRow from "@/src/component/input/input.row";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import EnhancedTable from "@/src/component/table/table.mui";
import CompanyService from "@/src/controller/api/company.api";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function CompanyModal(props: any) {
  const { title, openModal, onclose, data, refetch } = props;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const err =
    validateForm.notNull(name) ||
    validateForm.notNull(code) ||
    validateForm.notNull(phone) ||
    validateForm.notNull(email) ||
    validateForm.notNull(address);
  useEffect(() => {
    if (data) {
      setCode(data.code);
      setName(data.name);
      setPhone(data.phone);
      setEmail(data.email);
      setAddress(data.address);
      return;
    }
    setCode("");
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (err || loading) {
      console.log("validate fail");
      return;
    }
    setLoading(true);
    if (!data) {
      const res = await CompanyService.create({
        name,
        code,
        address,
        email,
        phone,
      });
      refetch();
      setLoading(false);
      onclose(false);
      console.log("🚀 ~ file: type.tsx:30 ~ handleSubmit ~ res:", res);
      return;
    }
    const res = await CompanyService.update(data._id, {
      name,
      code,
      address,
      email,
      phone,
    });
    refetch();
    setLoading(false);
    onclose(false);
    console.log("🚀 ~ file: type.tsx:34 ~ handleSubmit ~ res:", res);
    return;
  };

  return (
    <ModalAdmin openModal={openModal} onclose={() => onclose(false)}>
      <form onSubmit={handleSubmit} method="post">
        <HeadModal onclose={() => onclose(false)} title={title} />
        <div className="modal-body">
          <div className="col">
            <InputRow
              row={true}
              error={name === "" ? "not null" : false}
              name="name"
              type="text"
              value={name}
              placeholder="Tên"
              label="Tên"
              change={(e: any) => {
                setName(FormatData.iName(e));
                setCode(removeVietnameseTones(FormatData.iName(e || "")));
              }}
            />
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Mã"
              label="Mã"
              change={(e: any) => setCode(removeVietnameseTones(FormatData.iName(e || "")));}
            />
            <InputRow
              row={true}
              error={phone === "" ? "not null" : false}
              type="phone"
              value={phone}
              name="phone"
              placeholder="Số ĐT"
              label="Số ĐT"
              change={(e: any) => setPhone(e)}
            />
            <InputRow
              row={true}
              error={email === "" ? "not null" : false}
              type="email"
              value={email}
              name="email"
              placeholder="email"
              label="Email"
              change={(e: any) => setEmail(e)}
            />
            <InputRow
              row={true}
              error={address === "" ? "not null" : false}
              type="address"
              value={address}
              name="address"
              placeholder="địa chỉ"
              label="Địa chỉ"
              change={(e: any) => setAddress(e)}
            />
          </div>
        </div>
        {!err ? (
          <FooterModal
            save="Lưu"
            loading={loading}
            cancel="Huỷ"
            onCancel={() => onclose(false)}
          />
        ) : (
          ""
        )}
      </form>
    </ModalAdmin>
  );
}
