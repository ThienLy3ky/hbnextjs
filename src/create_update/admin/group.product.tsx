import InputNotState from "@/src/component/input/input.notstate";
import InputNoStateSelect from "@/src/component/input/select.nostate";
import Upload from "@/src/component/input/upload";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import { useEffect, useState } from "react";
interface IGroupconst {
  size: string;
  style: string;
  priceNew: number;
  priceOlder: number;
  group: string;
  image?: string;
}
interface IOptionconst {
  sizes: [];
  styles: [];
  groups: [];
}
interface IGroupProps {
  options: IOptionconst;
  openModal: boolean;
  onclose: any;
  groups: IGroupconst[];
  onSave: any;
  setImageUpload: any;
  setImageDelete: any;
}
const GroupPrice: IGroupconst = {
  size: "",
  style: "",
  priceNew: 0,
  priceOlder: 0,
  group: "",
  image: "",
};
export default function ProductGroup(props: IGroupProps) {
  const {
    options,
    openModal,
    onclose,
    groups,
    onSave,
    setImageUpload,
    setImageDelete,
  } = props;
  const [groupPrice, setGroupPrice] = useState<Array<IGroupconst>>([]);
  const [imagesUpload, setImageUploadC] = useState<Array<Object>>([]);
  const [imagesDelete, setImageDeleteC] = useState<Array<String>>([]);
  useEffect(() => {
    setImageDeleteC([]);
    setImageUploadC([]);
    setGroupPrice(groups);
  }, [groups, openModal]);
  const err = false;

  const handleSubmit = () => {
    onSave(groupPrice);
    setImageDelete(imagesDelete);
    setImageUpload(imagesUpload);
    onclose(false);
  };
  const add = () => {
    setGroupPrice([...groupPrice, GroupPrice]);
  };
  const handleUpload = () => {};
  const remove = (Item: number) => {
    let group = groupPrice.filter((e, index) => index !== Item);
    setImageDeleteC([
      ...imagesDelete,
      groupPrice[Item]?.image?.split("/")[
        (groupPrice[Item]?.image?.split("/").length || 1) - 1
      ] || "",
    ]);
    setGroupPrice(group);
  };
  return (
    <ModalAdmin
      openModal={openModal}
      onclose={() => {
        onclose(false);
      }}
    >
      <HeadModal onclose={() => onclose(false)} title={"Nhóm Sản phẩm"} />
      <div className="modal-body" style={{ overflow: "scroll" }}>
        {groupPrice?.map(
          (
            { group, size, style, image, priceNew, priceOlder }: any,
            index: number
          ) => (
            <div className="col pb-2 d-flex" key={index}>
              <div
                className="col-11 p-0 m-0 mt-2 group-price"
                style={{ background: "#edfff0" }}
              >
                <div className="d-flex">
                  <div className="flex-column col-md-8 p-0">
                    <InputNoStateSelect
                      options={options?.groups}
                      row={true}
                      // error={code === "" ? "not null" : false}
                      defaultValue={group?._id || group}
                      placeholder="Nhóm mặt hàng"
                      label="Nhóm mặt hàng"
                      change={(e: any) => {
                        groupPrice[index].group = e;
                      }}
                    />
                    <InputNoStateSelect
                      options={options?.sizes}
                      row={true}
                      // error={code === "" ? "not null" : false}
                      defaultValue={size?._id || size}
                      label="Kích cỡ"
                      placeholder="Đơn vị tính"
                      change={(e: any) => {
                        groupPrice[index].size = e;
                      }}
                    />
                    <InputNoStateSelect
                      options={options?.styles}
                      row={true}
                      // error={code === "" ? "not null" : false}
                      defaultValue={style?._id || style}
                      placeholder="Kiểu dáng"
                      label="Kiểu dáng"
                      change={(e: any) => {
                        groupPrice[index].style = e;
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <Upload
                      name="image"
                      type="file"
                      placeholder=""
                      older={image}
                      label="Hình ảnh"
                      change={(e: object, url: string) => {
                        groupPrice[index].image = url;
                        setImageUploadC([
                          ...imagesUpload,
                          {
                            name: image
                              ? image.split("/")[
                                  (image?.split("/").length || 1) - 1
                                ]
                              : `${group?._id || group}-${size?._id || size}-${
                                  style?._id || style
                                }`,
                            index,
                            file: e,
                          },
                        ]);
                      }}
                    />
                  </div>
                </div>

                <div className="col-12 row p-0 mr-0 ml-0 mt-2">
                  <div className="col-lg-6 col-md-12 p-0">
                    <InputNotState
                      row={true}
                      type="number"
                      defaultValue={priceOlder}
                      placeholder="Giá cũ"
                      label="Giá cũ"
                      change={(e: any) => {
                        groupPrice[index].priceOlder = e;
                      }}
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 p-0">
                    <InputNotState
                      row={true}
                      type="number"
                      defaultValue={priceNew}
                      placeholder="Giá mới"
                      label="Giá mới"
                      change={(e: any) => {
                        groupPrice[index].priceNew = e;
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-1 d-flex align-items-center"
                onClick={() => remove(index)}
              >
                <button className="btn btn-danger" style={{ height: "100%" }}>
                  <i
                    className="mdi mdi-minus-box col p-0"
                    style={{ fontSize: "200%" }}
                  />
                </button>
              </div>
              {/* */}
            </div>
          )
        )}
        <div className="col-12">
          <button
            className="col-12 btn btn-success"
            style={{ height: "100%" }}
            onClick={() => add()}
          >
            <i
              className="mdi mdi-plus-box col p-0"
              style={{ fontSize: "200%" }}
            />
          </button>
        </div>
      </div>
      {!err ? (
        <FooterModal
          save="Lưu"
          cancel="Huỷ"
          onCancel={() => onclose(false)}
          onsubmit={() => handleSubmit()}
        />
      ) : (
        ""
      )}
    </ModalAdmin>
  );
}
