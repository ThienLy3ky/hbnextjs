import InputRow from "@/src/component/input/input.row";
import UploadInput from "@/src/component/input/input.upload";
import InputSelect from "@/src/component/input/select.mui";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import ProductService from "@/src/controller/api/product.api";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
import { Button } from "@mui/material";
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
  const [size, setSize] = useState("");
  const [priceOlder, setpriceOlder] = useState(0);
  const [priceNew, setpriceNew] = useState(0);
  const [group, setgroup] = useState("");
  const [groupPrice, setGroupPrice] = useState<Array<IGroupconst>>([]);
  const [style, setStyle] = useState("");
  const [quantity, setquantity] = useState("");
  const [file, setFile] = useState("");
  const err = validateForm.notNull(name) || validateForm.notNull(code);

  useEffect(() => {
    setCode("");
    setName("");
    setDayOff("");
    setCategories("");
    setType("");
    setGroupPrice([]);
    setFile("");
    setExpDay("");
    setKeyWord("");
    setSummary("");
    setDescription("");
    setCompany("");
    if (data) {
      setCode(data.code);
      setName(data.name);
      setDayOff(data.dateOfProduction);
      setCategories(data.categories?._id);
      setType(data.type?._id);
      data.price?.map(({ size, style, group, priceNew, priceOlder }: any) => {
        setGroupPrice([
          {
            size: size._id,
            style: style._id,
            group: group._id,
            priceNew,
            priceOlder,
          },
          ...groupPrice,
        ]);
      });
      setExpDay(data.expirationDate);
      setKeyWord(data.keyWord);
      setSummary(data.summary);
      setDescription(data.description);
      setCompany(data.copany?._id);

      return;
    }
  }, [data]);

  const GroupPrice: IGroupconst = {
    size,
    style,
    priceNew,
    priceOlder,
    group,
    image: "",
  };
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
  const PriceGroup = (props: IpropsGroupconst) => {
    const { group } = props;

    return (
      <div className="col-12 p-0 m-0 mt-2 group-price">
        <InputSelect
          options={options?.priceGroup?.groups}
          row={true}
          readOnly={true}
          // error={code === "" ? "not null" : false}
          type="code"
          defaultValue={group?.group}
          placeholder="Nhóm mặt hàng"
          label="Nhóm mặt hàng"
        />
        <div className="col-12 row p-0 mr-0 ml-0 mt-2">
          <div className="col-6 p-0">
            <InputSelect
              options={options?.priceGroup?.sizes}
              row={true}
              readOnly={true}
              // error={code === "" ? "not null" : false}
              type="code"
              defaultValue={group?.size}
              placeholder="Kích thước"
              label="Kích thước"
            />
          </div>
          <div className="col-6 p-0">
            <InputSelect
              options={options?.priceGroup?.styles}
              row={true}
              readOnly={true}
              // error={code === "" ? "not null" : false}
              type="code"
              defaultValue={group.style}
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
            <UploadInput
              name="image"
              type="file"
              placeholder=""
              older={data?.price[0].image}
              label="Hình ảnh"
              change={setFile}
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
              type="code"
              change={(e: any) => setCategories(e)}
              defaultValue={categories}
              placeholder="Danh mục"
              label="Danh mục"
            />
            <InputSelect
              options={options?.template?.types}
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              defaultValue={type}
              placeholder="Loại"
              label="Loại"
              change={(e: any) => setType(e)}
            />
            <InputSelect
              options={options?.priceGroup?.companies}
              row={true}
              // error={code === "" ? "not null" : false}
              type="code"
              defaultValue={company}
              placeholder="Công ty"
              label="Công ty"
              change={(e: any) => setCompany(e)}
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
                  <InputSelect
                    options={options?.priceGroup?.groups}
                    row={true}
                    // error={code === "" ? "not null" : false}
                    type="code"
                    defaultValue={group}
                    placeholder="Nhóm mặt hàng"
                    label="Nhóm mặt hàng"
                    change={(e: any) => setgroup(e)}
                  />
                  <div className="col-12 row p-0 mr-0 ml-0 mt-2">
                    <div className="col-6 p-0">
                      <InputSelect
                        options={options?.priceGroup?.sizes}
                        row={true}
                        defaultValue={size}
                        // error={code === "" ? "not null" : false}
                        type="code"
                        placeholder="Kích thước"
                        label="Kích thước"
                        change={(e: any) => setSize(e)}
                      />
                    </div>
                    <div className="col-6 p-0">
                      <InputSelect
                        options={options?.priceGroup?.styles}
                        row={true}
                        defaultValue={style}
                        type="code"
                        placeholder="Kiểu dáng"
                        label="Kiểu dáng"
                        change={(e: any) => setStyle(e)}
                      />
                    </div>
                  </div>
                  <div className="col-12 row p-0 mr-0 ml-0 mt-2">
                    <div className="col-6 p-0">
                      <InputRow
                        row={true}
                        value={priceOlder}
                        // error={code === "" ? "not null" : false}
                        type="number"
                        placeholder="Giá cũ"
                        label="Giá cũ"
                        change={(e: any) => setpriceOlder(e)}
                      />
                    </div>
                    <div className="col-6 p-0">
                      <InputRow
                        row={true}
                        value={priceNew}
                        // error={code === "" ? "not null" : false}
                        type="number"
                        placeholder="Giá mới"
                        label="Giá mới"
                        change={(e: any) => setpriceNew(e)}
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
                  type="date"
                  value={expirationDate}
                  name="code"
                  placeholder="hạn SD"
                  label="hạn SD"
                  change={(e: any) => setExpDay(e)}
                />
              </div>
              <div className="col-6 p-0">
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
