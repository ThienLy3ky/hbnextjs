import InputRow from "@/src/component/input/input.row";
import UploadInput from "@/src/component/input/input.upload";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import CategoryService from "@/src/controller/api/categories.api";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
import { useEffect, useState } from "react";

export default function CategoryModal(props: any) {
  const { title, openModal, onclose, data, refetch } = props;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const err = validateForm.notNull(name) || validateForm.notNull(code);
  useEffect(() => {
    if (data) {
      setCode(data.code);
      setName(data.name);
      setDescription(data.descrption);
      return;
    }
    setCode("");
    setName("");
    setDescription("");
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (err || loading) {
      showNotificationError("validate fail");
      return;
    }
    const chek = await CategoryService.checkCode(
      {
        name,
        code,
      },
      data?.code || code
    );
    if (chek) {
      showNotificationError("Code đã tồn tại");
      return;
    }
    const formData = new FormData();
    setLoading(true);
    formData.append("images", file);
    formData.append("name", name);
    formData.append("code", code);
    formData.append("description", description);
    if (!data) {
      const res = await CategoryService.create(formData, code);
      if (res) showNotificationSuccess("Thêm mới thành công");
      refetch();
      setLoading(false);
      onclose(false);

      return;
    }
    const res = await CategoryService.update(data._id, formData, data.code);
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
              change={(e: any) =>
                setCode(removeVietnameseTones(FormatData.iName(e || "")))
              }
            />
            <InputRow
              row={true}
              textarea={true}
              name="description"
              type="text"
              placeholder=""
              label="Mô tả"
              value={description}
              change={(e: any) => setDescription(FormatData.iName(e))}
            />
            <UploadInput
              name="image"
              type="file"
              code={code}
              older={data?.image}
              placeholder=""
              label="Hình ảnh"
              change={setFile}
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
