import Image from "next/image";
import { useState } from "react";

export default function UploadInput({
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
        change(() => {
          return file;
        });
        return null;
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={
        row ? "form-group row align-items-end" : "form-group align-items-end "
      }
    >
      <label
        className={
          row ? "col-sm-3 col-form-label pl-4" : "col-12 col-form-label pl-4"
        }
        style={{
          fontWeight: "bolder",
          color: "darkblue",
          textAlign: alignLabel || "left",
        }}
      >
        {label}
      </label>
      <div
        className={
          row
            ? "col-sm-9 pl-0"
            : "col-12 col-form-label pl-4  d-flex justify-content-center"
        }
      >
        <div
          className="col-8"
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
      </div>
    </div>
  );
}
