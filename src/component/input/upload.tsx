import Image from "next/image";
import { useState } from "react";

export default function Upload({
  change,
  older,
  code,
  alignLabel,
  row,
  label,
}: any) {
  const [preview, setPreview] = useState("/static/image/download.png");
  const handleChange = async (e: any) => {
    const { files } = e.target;
    try {
      Array.from(files).map(async (file: any) => {
        if (!["image/png", "image/gif", "image/jpeg"].includes(file.type)) {
          return null;
        }
        if (file.size >= 5242880) {
          return null;
        }
        setPreview(URL.createObjectURL(file));
        file.olderName = "abc" + file.type;
        change(file, URL.createObjectURL(file));
        return null;
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="col"
      style={{ textAlign: "center", minHeight: "200px" }}
      title="Tải ảnh lên"
    >
      <input
        className="form-control input-upload"
        type="file"
        id="outlined-error"
        onChange={handleChange}
      />
      <Image
        alt="Hình ảnh"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={
          preview !== "/static/image/download.png"
            ? preview
            : older || "/static/image/download.png"
        }
      />
    </div>
  );
}
