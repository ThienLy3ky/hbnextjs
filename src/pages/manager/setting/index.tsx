import InputRow from "@/src/component/input/input.row";
import AdminLayout from "@/src/component/layout/client.admin";
import SettingService from "@/src/controller/api/setting.api";
import ReduxService from "@/src/controller/redux";
import { FormatData } from "@/src/utils/action.helper";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Setting() {
  const Settings = useSelector((state: any) => state?.app?.template?.setting);
  const [FBlink, setFBlink] = useState(Settings?.FBlink);
  const [Zalolink, setZalolink] = useState(Settings?.Zalolink);
  const [email, setEmail] = useState(Settings?.email);
  const [SDT, setSDT] = useState(Settings?.SDT);
  const [address, setAddress] = useState(Settings?.address);
  const [Image, setImage] = useState(Settings?.image);
  const [description, setDescription] = useState(Settings?.description);
  useEffect(() => {
    setFBlink(Settings?.FBlink);
    setZalolink(Settings?.Zalolink);
    setEmail(Settings?.email);
    setSDT(Settings?.SDT);
    setAddress(Settings?.address);
    setImage(Settings?.image);
    setDescription(Settings?.description);
  },[Settings]);
  const err = FBlink || Zalolink || email || address || description || SDT;
  const handUpdate = async () => {
    if (err) {
      const res = await SettingService.updateOrCreate({
        FBlink,
        Zalolink,
        address,
        description,
        SDT,
        email,
      });
      console.log("🚀 ~ file: index.tsx:26 ~ handlUpdate ~ res:", res);
    }
    await ReduxService.getSetting();
  };
  return (
    <AdminLayout title="Setting">
      <div className="col p-3 ">
        <div className="col-12 border-primary border p-3">
          <InputRow
            row={true}
            // error={name === "" ? "not null" : false}
            name="name"
            type="text"
            value={FBlink}
            alignLabel="center"
            placeholder="https://www.facebook.com/..."
            label="Trang FB"
            change={(e: any) => {
              setFBlink(e.target.value);
            }}
          />
          <InputRow
            row={true}
            // error={name === "" ? "not null" : false}
            name="name"
            type="link"
            value={Zalolink}
            alignLabel="center"
            placeholder="https://zalo.me/..."
            label="Zalo"
            change={(e: any) => {
              setZalolink(e.target.value);
            }}
          />
          <InputRow
            row={true}
            // error={name === "" ? "not null" : false}
            name="name"
            type="email"
            value={email}
            alignLabel="center"
            placeholder="..@gmail.com"
            label="Email"
            change={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <InputRow
            row={true}
            // error={name === "" ? "not null" : false}
            name="phone"
            type="text"
            value={SDT}
            alignLabel="center"
            placeholder="0..."
            label="Số Đt"
            change={(e: any) => {
              setSDT(e.target.value);
            }}
          />
          <InputRow
            row={true}
            // error={name === "" ? "not null" : false}
            name="name"
            type="text"
            value={address}
            alignLabel="center"
            placeholder="Địa Chỉ"
            label="Địa Chỉ"
            change={(e: any) => {
              setAddress(FormatData.iName(e.target.value));
            }}
          />
          <InputRow
            row={true}
            // error={name === "" ? "not null" : false}
            name="name"
            type="text"
            value={Image}
            alignLabel="center"
            label="Hình"
            // change={(e: any) => {
            //   setName(FormatData.iName(e.target.value));

            // }}
          />
          <InputRow
            row={true}
            alignLabel="center"
            textarea={true}
            name="description"
            type="text"
            // error={name === "" ? "not null" : false}
            placeholder=""
            label="Mô tả"
            value={description}
            change={(e: any) =>
              setDescription(FormatData.iName(e.target.value))
            }
          />
        </div>
        <div className="col-12 border-primary border p-3 text-right">
          <Button
            variant="contained"
            color="info"
            onClick={handUpdate}
            disabled={!err}
            endIcon={<i className="mdi mdi-send"></i>}
          >
            Lưu
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
