import InputRow from "@/src/component/input/input.row";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import StyleService from "@/src/controller/api/style.api";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
import { useEffect, useState } from "react";

export default function StyleModal(props: any) {
  const { title, openModal, onclose, data, refetch } = props;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const err = validateForm.notNull(name) || validateForm.notNull(code);
  useEffect(() => {
    if (data) {
      setCode(data.code);
      setName(data.name);
      setDescription(data.description);
      return;
    }
    setCode("");
    setName("");
    setDescription("");
  }, [data, openModal]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (err || loading) {
      showNotificationError("validate fail");
      return;
    }
    setLoading(true);
    if (!data) {
      const res = await StyleService.create({ name, code, description });
      refetch();
      setLoading(false);
      onclose(false);
      if (res) showNotificationSuccess("Thêm mới thành công");
      return;
    }
    const res = await StyleService.update(data._id, {
      name,
      code,
      description,
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
