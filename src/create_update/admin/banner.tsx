import InputRow from "@/src/component/input/input.row";
import UploadInput from "@/src/component/input/input.upload";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import InputSelect from "@/src/component/input/select.mui";
import BannerService from "@/src/controller/api/banner.api";
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
const option = [
  {
    _id: 1,
    name: "Banner Chữ",
  },
  {
    _id: 2,
    name: "Banner Sale",
  },
];
export default function BannerModal(props: any) {
  const { title, openModal, onclose, data, refetch } = props;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState("");
  const err = validateForm.notNull(name) || validateForm.notNull(content);
  useEffect(() => {
    if (data) {
      setContent(data.content);
      setName(data.name);
      return;
    }
    setContent("");
    setName("");
  }, [data, openModal]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (err || loading) {
      showNotificationError("validate fail");
      return;
    }
    formData.append("images", file);
    formData.append("title", name);
    formData.append("content", content);
    formData.append("type", type);
    formData.append("link", link);
    setLoading(true);
    if (!data) {
      const res = await BannerService.create(formData);
      refetch();
      setLoading(false);
      onclose(false);
      if (res) showNotificationSuccess("Thêm mới thành công");
      return;
    }

    const res = await BannerService.update(data._id, formData);
    if (res) showNotificationSuccess("Thay đổi thành công");
    refetch();
    setContent("");
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
              placeholder="Tiêu đề"
              label="Tiêu đề"
              change={(e: any) => {
                setName(FormatData.iName(e));
              }}
            />
            <InputRow
              row={true}
              error={content === "" ? "not null" : false}
              type="content"
              value={content}
              name="content"
              placeholder="Nội dung"
              label="Nội dung"
              change={(e: any) => setContent(FormatData.iName(e || ""))}
            />
            <InputSelect
              options={option}
              row={true}
              // error={content === "" ? "not null" : false}
              value={type}
              placeholder="Loại Banner"
              label="Loại Banner"
              change={(e: any) => setType(e)}
            />
            <InputRow
              row={true}
              // error={content === "" ? "not null" : false}
              type="link"
              value={link}
              name="content"
              placeholder="Link"
              label="Link"
              change={(e: any) => setLink(e)}
            />
            <UploadInput
              name="image"
              type="file"
              content={content}
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
