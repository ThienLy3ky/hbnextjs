import GroupText from "@/src/component/group";
import InputOnlyRead from "@/src/component/input/input.onlyread";
import InputRow from "@/src/component/input/input.row";
import InputSelect from "@/src/component/input/select.mui";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import ProductService from "@/src/controller/api/product.api";
import GroupProduct from "@/src/create_update/admin/group.product";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
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
  const { title, openModal, onclose, data, refetch, options } = props;
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
  const [imagesUpload, setImageUpload] = useState<Array<Object>>([]);
  const [imagesDelete, setImageDelete] = useState<Array<String>>([]);
  const err = validateForm.notNull(name) || validateForm.notNull(code);
  const initData = () => {
    setCode("");
    setName("");
    setDayOff("");
    setCategories("");
    setType("");
    setGroupPrice([]);
    setGroupPriceNew([]);
    setExpDay("");
    setKeyWord("");
    setSummary("");
    setDescription("");
    setCompany("");
    setImageDelete([]);
    setImageUpload([]);
    setLoading(false);
  };
  useEffect(() => {
    initData();
    if (data) {
      const Data = Object.create(data);
      setCode(Data.code);
      setName(Data.name);
      setDayOff(new Date(Data.dateOfProduction).toISOString().split("T")[0]);
      setCategories(Data.categories?._id);
      setType(Data.type?._id);
      setExpDay(new Date(Data.expirationDate).toISOString().split("T")[0]);
      setKeyWord(Data.keyWord);
      setSummary(Data.summary);
      setGroupPrice(Data?.price);
      setDescription(Data.description);
      setCompany(Data.company?._id);

      return;
    }
  }, [data, openModal]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (err || loading) {
      showNotificationError("validate fail");
      return;
    }
    const chek = await ProductService.checkCode(
      {
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
        categories,
      },
      data.code || code
    );
    if (chek) {
      showNotificationError("Code đã tồn tại");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    if (
      imagesDelete.length > 1 ||
      (imagesDelete.length === 1 && imagesDelete[0] !== "")
    )
      ProductService.deletedFile(imagesDelete);
    imagesUpload.map(async (images: any) => {
      if (images !== "") {
        formData.append("images", images.file, images.name + ".jpeg");
        const listImage = await ProductService.uploadImage(formData, "");
        groupPrice[images.index].image = listImage[0];
      }
    });

    if (!data) {
      const res = await ProductService.create({
        name,
        code: data.code,
        summary,
        keyWord,
        company,
        description,
        type,
        expirationDate,
        dateOfProduction,
        price: groupPrice,
        categories,
      });
      if (res) showNotificationSuccess("Cập nhật thành công");
      refetch();
      setLoading(false);
      onclose(false);
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
      categories,
    });
    if (res) showNotificationSuccess("Thay đổi thành công");
    refetch();
    setLoading(false);
    onclose(false);
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
                      <i
                        className="mdi mdi-settings-box"
                        onClick={() => setOpenGroup(true)}
                      />
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
                  setImageUpload={setImageUpload}
                  setImageDelete={(e: any) => {
                    setImageDelete([...imagesDelete, e]);
                  }}
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
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                              value={Number(groups.priceOlder).toLocaleString()}
                            />
                            <InputOnlyRead
                              className="col-md-6"
                              label={"Giá mới"}
                              value={Number(groups.priceNew).toLocaleString()}
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
