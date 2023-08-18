import { useState } from "react";
import { StyledObject } from "styled-components";

export default function UploadFiel(props: any) {
  const { changeFile } = props;
  const [preview, setPreview] = useState(
    "/static/image/cucumber-aloe-cosmetic-cream-face-skin-body-care-hygiene-moisture-lotion_155003-2547.jpeg"
  );
  const styleIp = {};
  const handleChange = async (e: any) => {
    // setLoading(true);
    const { files } = e.target;
    try {
      Array.from(files).map(async (file: any) => {
        // if (type == "pdf") {
        //   if (!["application/pdf"].includes(file.type)) {
        //     // showNotificationError("File is not PDF file");
        //     return null;
        //   }
        //   if (file.size >= 5242880) {
        //     // showNotificationError("Image size larger than 5MB");
        //     return null;
        //   }
        //   // setPreview(URL.createObjectURL(file));
        //   // changeImage(() => {
        //   // return file;
        //   // });
        //   return null;
        // }
        if (!["image/png", "image/gif", "image/jpeg"].includes(file.type)) {
          console.log("File is not image");

          // showNotificationError("File is not image");
          return null;
        }
        if (file.size >= 5242880) {
          // showNotificationError("Image size larger than 5MB");
          console.log("Image size larger than 5MB");

          return null;
        }
        setPreview(URL.createObjectURL(file));
        console.log(
          "🚀 ~ file: upload.tsx:43 ~ Array.from ~ URL.createObjectURL(file):",
          URL.createObjectURL(file)
        );
        // changeFile(() => {
        //   return file;
        // });
        return preview;
      });
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
      // onBlur && onBlur();
    }
  };
  return (
    <div>
      <input
        className="form-control"
        type="file"
        onChange={handleChange}
        style={{
          height: "100%",
          opacity: 0,
          position: "absolute",
        }}
      />
      <img style={{ height: "200px" }} src={preview} />
    </div>
  );
}
