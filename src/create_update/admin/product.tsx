import InputRow from "@/src/component/input/input.row";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import EnhancedTable from "@/src/component/table/table.mui";
import TypeService from "@/src/controller/api/type.api";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TypeModal(props: any) {
  const { title, openModal, onclose, data, refetch } = props;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [categories, setCategories] = useState("");
  const [expirationDate, setExpDay] = useState("");
  const [dateOfProduction, setDayOff] = useState("");
  const [size, setSize] = useState("");
  const [priceOlder, setpriceOlder] = useState("");
  const [priceNew, setpriceNew] = useState("");
  const [group, setgroup] = useState("");
  const [style, setStyle] = useState("");
  const [quantity, setquantity] = useState("");
  const [file, setFile] = useState();
  const err = validateForm.notNull(name) || validateForm.notNull(code);
  useEffect(() => {
    if (data) {
      setCode(data.code);
      setName(data.name);
      return;
    }
    setCode("");
    setName("");
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (err || loading) {
      console.log("validate fail");
      return;
    }
    setLoading(true);
    if (!data) {
      const res = await TypeService.create({ name, code });
      refetch();
      setLoading(false);
      onclose(false);
      console.log("🚀 ~ file: type.tsx:30 ~ handleSubmit ~ res:", res);
      return;
    }
    const res = await TypeService.update(data._id, { name, code });
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
        <div className="modal-body" style={{ overflow: "scroll" }}>
          <div className="col">
            <InputRow
              row={true}
              name="image"
              type="file"
              placeholder=""
              label="Hình ảnh"
              // change={setFile}
            />
            <InputRow
              row={true}
              error={name === "" ? "not null" : false}
              name="name"
              type="text"
              value={name}
              placeholder="Tên"
              label="Tên"
              change={(e: any) => {
                setName(FormatData.iName(e.target.value));
                setCode(
                  removeVietnameseTones(
                    FormatData.iName(e?.target?.value || "")
                  )
                );
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
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Từ khoá"
              label="Từ khoá"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Kích thước"
              label="Kích thước"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Kiểu dáng"
              label="Kiểu dáng"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Nhóm mặt hàng"
              label="Nhóm mặt hàng"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Giá cũ"
              label="Giá cũ"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Giá mới"
              label="Giá mới"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Số lượng"
              label="Số lượng"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Danh mục"
              label="Danh mục"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Loại"
              label="Loại"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="công ty"
              label="công ty"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="hạn SD"
              label="hạn SD"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Ngày SX"
              label="Ngày SX"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="code"
              value={code}
              name="code"
              placeholder="Tiêu đề"
              label="Tiêu đề"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />{" "}
            <InputRow
              row={true}
              error={code === "" ? "not null" : false}
              type="text"
              value={code}
              name="code"
              placeholder="Mô Tả"
              label="Mô Tả"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />
          </div>
        </div>
        {!err ? (
          <FooterModal
            save="Lưu"
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
