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
interface IGroupconst {
  size: string;
  style: string;
  priceNew: number;
  priceOlder: number;
  group: string;
}
interface IpropsGroupconst {
  index: number;
  group: IGroupconst;
}
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
  const [priceOlder, setpriceOlder] = useState(0);
  const [priceNew, setpriceNew] = useState(0);
  const [group, setgroup] = useState("");
  const [groupPrice, setGroupPrice] = useState<Array<IGroupconst>>([]);
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

  const GroupPrice: IGroupconst = {
    size,
    style,
    priceNew,
    priceOlder,
    group,
  };
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
  const PriceGroup = (props: IpropsGroupconst) => {
    const { group } = props;
    return (
      <div className="col-12 p-0 m-0 mt-2 group-price">
        <InputRow
          row={true}
          type="code"
          value={group?.group}
          placeholder="Nhóm mặt hàng"
          label="Nhóm mặt hàng"
        />
        <div className="col-12 row p-0 mr-0 ml-0 mt-2">
          <div className="col-6 p-0">
            <InputRow
              row={true}
              type="code"
              value={group?.size}
              placeholder="Kích thước"
              label="Kích thước"
            />
          </div>
          <div className="col-6 p-0">
            <InputRow
              row={true}
              type="code"
              value={group.style}
              placeholder="Kiểu dáng"
              label="Kiểu dáng"
            />
          </div>
        </div>
        <div className="col-12 row p-0 mr-0 ml-0 mt-2">
          <div className="col-6 p-0">
            <InputRow
              row={true}
              type="code"
              value={group.priceOlder}
              placeholder="Giá cũ"
              label="Giá cũ"
            />
          </div>
          <div className="col-6 p-0">
            <InputRow
              row={true}
              type="code"
              value={group.priceNew}
              placeholder="Giá mới"
              label="Giá mới"
            />
          </div>
        </div>
      </div>
    );
  };

  const handleAdd = () => {
    if (style !== "" && size !== "" && group !== "") {
      setGroupPrice([GroupPrice, ...groupPrice]);
      setgroup("");
      setStyle("");
      setSize("");
      setpriceNew(0);
      setpriceOlder(0);
    }
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
              // error={name === "" ? "not null" : false}
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
              // error={code === "" ? "not null" : false}
              type="code"
              value={description}
              placeholder="Tiêu đề"
              label="Tiêu đề"
              change={(e: any) =>
                setDescription(FormatData.iName(e.target.value))
              }
            />
            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={code}
              placeholder="Mã"
              label="Mã"
              change={(e: any) => setCode(FormatData.iName(e.target.value))}
            />
            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={keyWord}
              placeholder="Từ khoá"
              label="Từ khoá"
              change={(e: any) => setKeyWord(FormatData.iName(e.target.value))}
            />

            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={quantity}
              placeholder="Số lượng"
              label="Số lượng"
              change={(e: any) => setquantity(FormatData.iName(e.target.value))}
            />
            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={categories}
              placeholder="Danh mục"
              label="Danh mục"
              change={(e: any) =>
                setCategories(FormatData.iName(e.target.value))
              }
            />
            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={type}
              placeholder="Loại"
              label="Loại"
              change={(e: any) => setType(FormatData.iName(e.target.value))}
            />
            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={company}
              placeholder="công ty"
              label="công ty"
              change={(e: any) => setCompany(FormatData.iName(e.target.value))}
            />
            <div className="col-12 p-0">
              <h5
                className="col-12 m-0 d-flex justify-content-between p-0"
                style={{ borderBottom: "2px Blue solid" }}
              >
                Giá:
                <div>
                  <Button
                    size="small"
                    className="p-0"
                    endIcon={
                      <i
                        className="mdi mdi-chevron-down "
                        style={{ fontSize: "xx-large", lineHeight: 0 }}
                      ></i>
                    }
                    data-toggle="collapse"
                    href="#listPrice"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  ></Button>
                  <Button
                    size="small"
                    className="p-0"
                    onClick={handleAdd}
                    endIcon={
                      <i
                        className="mdi mdi-plus-box-outline p-0"
                        style={{ fontSize: "xx-large", lineHeight: 0 }}
                      ></i>
                    }
                  ></Button>
                </div>
              </h5>
              <div
                className="collapse multi-collapse col-12 mb-4 mt-2"
                id="listPrice"
                style={{ borderBottom: "2px Blue solid" }}
              >
                {groupPrice?.length > 0
                  ? groupPrice?.map((groups, index) => {
                      return (
                        <PriceGroup key={index} group={groups} index={index} />
                      );
                    })
                  : ""}
                <div className="col-12 p-0 m-0 mt-2 group-price">
                  <InputRow
                    row={true}
                    value={group}
                    // error={code === "" ? "not null" : false}
                    type="code"
                    placeholder="Nhóm mặt hàng"
                    label="Nhóm mặt hàng"
                    change={(e: any) => setgroup(e.target.value)}
                  />
                  <div className="col-12 row p-0 mr-0 ml-0 mt-2">
                    <div className="col-6 p-0">
                      <InputRow
                        row={true}
                        value={size}
                        // error={code === "" ? "not null" : false}
                        type="code"
                        placeholder="Kích thước"
                        label="Kích thước"
                        change={(e: any) => setSize(e.target.value)}
                      />
                    </div>
                    <div className="col-6 p-0">
                      <InputRow
                        row={true}
                        value={style}
                        // error={code === "" ? "not null" : false}
                        type="code"
                        placeholder="Kiểu dáng"
                        label="Kiểu dáng"
                        change={(e: any) => setStyle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 row p-0 mr-0 ml-0 mt-2">
                    <div className="col-6 p-0">
                      <InputRow
                        row={true}
                        value={priceOlder}
                        // error={code === "" ? "not null" : false}
                        type="money"
                        placeholder="Giá cũ"
                        label="Giá cũ"
                        change={(e: any) => setpriceOlder(e.target.value)}
                      />
                    </div>
                    <div className="col-6 p-0">
                      <InputRow
                        row={true}
                        value={priceNew}
                        // error={code === "" ? "not null" : false}
                        type="money"
                        placeholder="Giá mới"
                        label="Giá mới"
                        change={(e: any) => setpriceNew(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 row p-0 mr-0 ml-0 mt-3">
              <div className="col-6 p-0">
                <InputRow
                  row={true}
                  // error={code === "" ? "not null" : false}
                  type="code"
                  value={code}
                  name="code"
                  placeholder="hạn SD"
                  label="hạn SD"
                  change={(e: any) => setCode(FormatData.iName(e.target.value))}
                />
              </div>
              <div className="col-6 p-0">
                <InputRow
                  row={true}
                  // error={code === "" ? "not null" : false}
                  type="code"
                  value={code}
                  name="code"
                  placeholder="Ngày SX"
                  label="Ngày SX"
                  change={(e: any) => setCode(FormatData.iName(e.target.value))}
                />
              </div>
            </div>

            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="text"
              value={code}
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
