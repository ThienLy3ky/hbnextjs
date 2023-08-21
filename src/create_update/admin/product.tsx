import GroupText from "@/src/component/group";
import InputOnlyRead from "@/src/component/input/input.onlyread";
import InputRow from "@/src/component/input/input.row";
import InputSelect from "@/src/component/input/select.mui";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import ProductService from "@/src/controller/api/product.api";
import GroupProduct from "@/src/create_update/admin/group.product";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { group } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
interface IGroupconst {
  size: string;
  style: string;
  priceNew: number;
  priceOlder: number;
  group: string;
  image?: string;
}
interface IpropsGroupconst {
  index: number;
  group: IGroupconst;
}
export default function ProductModal(props: any) {
  const { title, openModal, onclose, data, refetch, options, noti, setStatus } =
    props;
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
  const [openGroup, setOpenGroup] = useState(false);
  const [groupPrice, setGroupPrice] = useState<Array<IGroupconst>>([]);
  const [groupPriceNew, setGroupPriceNew] = useState<Array<IGroupconst>>([]);
  const [quantity, setquantity] = useState("");
  const [file, setFile] = useState("");
  const err = validateForm.notNull(name) || validateForm.notNull(code);
  const initData = () => {
    setCode("");
    setName("");
    setDayOff("");
    setCategories("");
    setType("");
    setGroupPrice([]);
    setGroupPriceNew([]);
    setFile("");
    setExpDay("");
    setKeyWord("");
    setSummary("");
    setDescription("");
    setCompany("");
  };
  useEffect(() => {
    initData();
    if (data) {
      setCode(data.code);
      setName(data.name);
      setDayOff(new Date(data.dateOfProduction).toISOString().split("T")[0]);
      setCategories(data.categories?._id);
      setType(data.type?._id);
      setExpDay(new Date(data.expirationDate).toISOString().split("T")[0]);
      setKeyWord(data.keyWord);
      setSummary(data.summary);
      setGroupPrice(data?.price);
      setDescription(data.description);
      setCompany(data.company?._id);

      return;
    }
  }, [data, openGroup]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (err || loading) {
      console.log("validate fail");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("images", file);
    const image = file
      ? await ProductService.uploadImage(formData, code)
      : undefined;
    if (image) {
      groupPrice[0].image = image[0];
    }
    if (!data) {
      const res = await ProductService.create({
        name,
        code,
        summary,
        keyWord,
        company,
        description,
        type,
        expirationDate,
        dateOfProduction,
        price: groupPrice,
        quantity,
        categories,
      });
      setStatus({ status: "success", message: "Cập nhật thành công" });
      refetch();
      setLoading(false);
      onclose(false);
      noti(true);
      return;
    }
    const res = await ProductService.update(data._id, {
      name,
      code,
      summary,
      keyWord,
      company,
      description,
      type,
      expirationDate,
      dateOfProduction,
      price: groupPrice,
      quantity,
      categories,
    });
    setStatus({ status: "success", message: "Thay đổi thành công" });
    refetch();
    setLoading(false);
    onclose(false);
    noti(true);
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
              // error={name === "" ? "not null" : false}
              name="name"
              type="text"
              value={name}
              placeholder="Tên"
              label="Tên"
              change={(e: any) => {
                setName(FormatData.iName(e));
                setCode(removeVietnameseTones(FormatData.iName(e)));
              }}
            />
            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={summary}
              placeholder="Tiêu đề"
              label="Tiêu đề"
              change={(e: any) => setSummary(FormatData.iName(e))}
            />
            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={code}
              placeholder="Mã"
              label="Mã"
              change={(e: any) =>
                setCode(removeVietnameseTones(FormatData.iName(e || "")))
              }
            />
            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              value={keyWord}
              placeholder="Từ khoá"
              label="Từ khoá"
              change={(e: any) => setKeyWord(FormatData.iName(e))}
            />

            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="number"
              value={quantity}
              placeholder="Số lượng"
              label="Số lượng"
              change={(e: any) => setquantity(FormatData.iName(e))}
            />
            <InputSelect
              options={options?.template?.categories}
              row={true}
              // error={code === "" ? "not null" : false}
              change={(e: any) => setCategories(e)}
              value={categories}
              placeholder="Danh mục"
              label="Danh mục"
            />
            <InputSelect
              options={options?.template?.types}
              row={true}
              // error={code === "" ? "not null" : false}
              value={type}
              placeholder="Loại"
              label="Loại"
              change={(e: any) => setType(e)}
            />
            <InputSelect
              options={options?.priceGroup?.companies}
              row={true}
              // error={code === "" ? "not null" : false}
              value={company}
              placeholder="Công ty"
              label="Công ty"
              change={(e: any) => setCompany(e)}
            />
            <div className="col-12 p-0">
              <GroupText
                label={
                  <div className="col-12 p-0 d-flex justify-content-between align-items-center">
                    <h5>Nhóm sản phẩm</h5>
                    <div style={{ fontSize: " xx-large" }}>
                      <i className="mdi mdi-plus-box" />
                      {data?.price?.length > 0 ? (
                        <i
                          className="mdi mdi-settings-box"
                          onClick={() => setOpenGroup(true)}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                }
              >
                <GroupProduct
                  options={options?.priceGroup}
                  groups={groupPrice}
                  openModal={openGroup}
                  onclose={setOpenGroup}
                  onSave={(e: any) => setGroupPrice(e)}
                />
                {groupPrice?.length > 0
                  ? groupPrice?.map((groups: any, index: number) => {
                      return (
                        <div
                          key={index}
                          style={{ borderBottom: "1px black solid" }}
                        >
                          <div className="d-flex">
                            <div className="flex-column col-8">
                              <InputOnlyRead
                                className="col-md-12"
                                label={"Nhóm"}
                                value={
                                  groups.group?.name ||
                                  options?.priceGroup?.groups?.find(
                                    (price: any) => groups?.group === price?._id
                                  )?.name
                                }
                              />
                              <InputOnlyRead
                                className="col-md-12"
                                label={"Kích cỡ"}
                                value={
                                  groups.size?.name ||
                                  options?.priceGroup?.sizes?.find(
                                    (price: any) => groups?.size === price?._id
                                  )?.name
                                }
                              />
                              <InputOnlyRead
                                className="col-md-12"
                                label={"Kiểu dáng"}
                                value={
                                  groups.style?.name ||
                                  options?.priceGroup?.styles?.find(
                                    (price: any) => groups?.style === price?._id
                                  )?.name
                                }
                              />
                            </div>
                            <div className="col-4">
                              <Image
                                alt="Hình ảnh"
                                layout="fill"
                                objectFit="contain"
                                src={
                                  groups.image || "/static/image/noImage.jpeg"
                                }
                              />
                            </div>
                          </div>
                          <div className="d-flex">
                            <InputOnlyRead
                              className="col-md-6"
                              label={"Giá Cũ"}
                              value={groups.priceOlder}
                            />
                            <InputOnlyRead
                              className="col-md-6"
                              label={"Giá mới"}
                              value={groups.priceNew}
                            />
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </GroupText>
            </div>
            <div className="col-12 row p-0 mr-0 ml-0 mt-3">
              <div className="col-md-6 p-0">
                <InputRow
                  row={true}
                  // error={code === "" ? "not null" : false}
                  type="date"
                  value={expirationDate}
                  name="code"
                  placeholder="hạn SD"
                  label="hạn SD"
                  change={(e: any) => setExpDay(e)}
                />
              </div>
              <div className="col-md-6 p-0">
                <InputRow
                  row={true}
                  // error={code === "" ? "not null" : false}
                  type="date"
                  value={dateOfProduction}
                  name="code"
                  placeholder="Ngày SX"
                  label="Ngày SX"
                  change={(e: any) => setDayOff(e)}
                />
              </div>
            </div>

            <InputRow
              row={true}
              // error={code === "" ? "not null" : false}
              type="text"
              value={description}
              textarea={true}
              placeholder="Mô Tả"
              label="Mô Tả"
              change={(e: any) => setDescription(e)}
            />
          </div>
        </div>
        {!err ? (
          <FooterModal
            loading={loading}
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
