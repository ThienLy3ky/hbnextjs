import InputRow from "@/src/component/input/input.row";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import GroupService from "@/src/controller/api/group.api";
import {
  FormatData,
  removeVietnameseTones,
  validateForm,
} from "@/src/utils/action.helper";
import { useEffect, useState } from "react";

export default function GroupModal(props: any) {
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
    initData();
  }, [data]);

  const initData = () => {
    setCode("");
    setName("");
    setDescription("");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (err || loading) {
      console.log("validate fail");
      return;
    }
    setLoading(true);
    if (!data) {
      const res = await GroupService.create({ name, code, description });
      refetch();
      setLoading(false);
      initData();
      onclose(false);
      console.log("🚀 ~ file: type.tsx:30 ~ handleSubmit ~ res:", res);
      return;
    }
    const res = await GroupService.update(data._id, {
      name,
      code,
      description,
    });
    refetch();
    setLoading(false);
    initData();
    onclose(false);
    console.log("🚀 ~ file: type.tsx:34 ~ handleSubmit ~ res:", res);
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
              textarea={true}
              name="description"
              type="text"
              placeholder=""
              label="Mô tả"
              value={description}
              change={(e: any) =>
                setDescription(FormatData.iName(e.target.value))
              }
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
