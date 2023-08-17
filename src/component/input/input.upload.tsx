import Image from "next/image";
import { useState } from "react";

export default function UploadInput(props: any) {
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
        return null;
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="col-8">
      <input
        className="form-control"
        type="file"
        id="outlined-error"
        onChange={handleChange}
        style={{
          padding: "5px",
          height: "100%",
          position: "absolute",
          opacity: 0,
        }}
        // onChange={(e) => change(formatString(e.target.value))
      />
      <img src={preview} width={50} height={"100%"} alt="no image" />
    </div>
  );
}
