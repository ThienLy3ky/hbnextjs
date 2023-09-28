import InputNotState from "@/src/component/input/input.notstate";
import InputRow from "@/src/component/input/input.row";
import InputSelect from "@/src/component/input/select.mui";
import InputNoStateSelect from "@/src/component/input/select.nostate";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import Image from "next/image";
import { useState } from "react";
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
}
// const GroupPrice: IGroupconst = {
//   size,
//   style,
//   priceNew,
//   priceOlder,
//   groups,
//   image: "",
// };
export default function NewProductGroup(props: IGroupProps) {
  const { options, openModal, onclose, groups, onSave } = props;
  const [loading, setLoading] = useState(false);
  const err = false;

  const handleSubmit = () => {
    onSave(groups);
    onclose(false);
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
        {groups?.map(
          (
            { group, size, style, image, priceNew, priceOlder }: any,
            index: number
          ) => (
            <div className="col pb-2" key={index}>
              <div
                className="col-12 p-0 m-0 mt-2 group-price"
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
                        groups[index].group = e;
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
                        groups[index].size = e;
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
                        groups[index].style = e;
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <Image
                      priority={false}
                      alt="Hình ảnh"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      src={image || "/static/image/noImage.jpeg"}
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
                        groups[index].priceOlder = e;
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
                        groups[index].priceNew = e;
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* <UploadInput
              name="image"
              type="file"
              placeholder=""
              older={data?.price[0].image}
              label="Hình ảnh"
              change={setFile}
            /> */}
            </div>
          )
        )}
      </div>
      {!err ? (
        <FooterModal
          save="Lưu"
          cancel="Huỷ"
          loading={loading}
          onCancel={() => onclose(false)}
          onsubmit={() => handleSubmit()}
        />
      ) : (
        ""
      )}
    </ModalAdmin>
  );
}
