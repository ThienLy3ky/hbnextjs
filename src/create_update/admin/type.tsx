import InputRow from "@/src/component/input/input.row";
import UploadInput from "@/src/component/input/input.upload";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import TypeService from "@/src/controller/api/type.api";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
import { useEffect, useState } from "react";

export default function TypeModal(props: any) {
  const { title, openModal, onclose, data, refetch } = props;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [file, setFile] = useState("");
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
    const formData = new FormData();
    if (err || loading) {
      console.log("validate fail");
      return;
    }
    setLoading(true);
    if (!data) {
      formData.append("images", file);
      formData.append("name", name);
      formData.append("code", code);
      const res = await TypeService.create(formData, code);
      refetch();
      setLoading(false);
      onclose(false);

      return;
    }

    formData.append("images", file);
    formData.append("name", name);
    formData.append("code", code);
    const res = await TypeService.update(data._id, formData, code);
    refetch();
    setCode("");
    setName("");
    setFile("");
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
            <UploadInput
              name="image"
              type="file"
              code={code}
              older={data?.image}
              placeholder=""
              label="Hình ảnh"
              change={(e: any) => setFile(e)}
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
