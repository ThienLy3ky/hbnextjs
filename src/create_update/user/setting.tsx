import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import UserService from "@/src/controller/api/user";
import { OutlinedInput, InputAdornment } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Setting({ data }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassWord, setNewPassWord] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleUpdate = async () => {
    const res = await UserService.updateProfile({
      name,
      sdt: phone,
      username,
      password,
    });
    res
      ? showNotificationSuccess("Cập nhật thành công")
      : showNotificationError("Thay đổi chưa thành công");
    console.log("🚀 ~ file: setting.tsx:24 ~ handleUpdate ~ res:", res);
  };
  const handleChangePass = async () => {
    const res = await UserService.changePassword({ password, newPassWord });
    console.log("🚀 ~ file: setting.tsx:33 ~ handleChangePass ~ res:", res);
  };
  useEffect(() => {
    setName(data.name ?? "");
    setPhone(data.accountId?.sdt ?? "");
    setUsername(data.accountId?.username ?? "");
  }, [data]);
  return (
    <div className="content-body tab-content">
      <nav className="nav w-100 d-flex nav-pills mb-4">
        <a
          className="col-6 nav-link active"
          data-toggle="tab"
          href="#tab-pane-infor"
          style={{ width: "100%", borderBottom: "1px red solid" }}
        >
          <p className="pb-0 mb-0">Thông tin chung</p>
        </a>
        <a
          className="col-6 nav-link  "
          data-toggle="tab"
          href="#tab-pane-change-pass"
          style={{ width: "100%", borderBottom: "1px red solid" }}
        >
          <p className="pb-0 mb-0">Đổi mật khẩu</p>
        </a>
      </nav>
      <div className="tab-pane fade show active" id="tab-pane-infor">
        <form className="form-horizontal col-12 col" role="form">
          <div className="form-group col-12 row">
            <label className="col-12 col-md-4 control-label">Tên:</label>
            <div className="col-12 col-md-8">
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </div>
          </div>
          <div className="form-group col-12 row">
            <label className="col-12 col-md-4 control-label">
              Số điện thoại:
            </label>
            <div className="col-12 col-md-8">
              <input
                className="form-control"
                type="text"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </div>
          </div>
          <div className="form-group col-12 row">
            <label className="col-12 col-md-4 control-label">Username:</label>
            <div className="col-12 col-md-8">
              <input
                className="form-control"
                type="text"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
          </div>
          <div className="form-group col-12 row">
            <label className="col-12 col-md-4 control-label">
              Nhập mật khẩu để Xác nhận:
            </label>
            <div className="col-12 col-md-8">
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    {showPassword ? (
                      <i
                        className="fa fa-eye"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      ></i>
                    )}
                  </InputAdornment>
                }
                size="small"
                className="col-12"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
          </div>
          <div className="form-group col-12 row">
            <label className="col-12 col-md-3 control-label"></label>
            <div className="col-12 col-md-8">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleUpdate()}
              >
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="tab-pane fade show" id="tab-pane-change-pass">
        <form className="form-horizontal col-12 col" role="form">
          <div className="form-group col-12 row">
            <label className="col-12 col-md-4 control-label">
              Mật khẩu cũ:
            </label>
            <div className="col-12 col-md-8">
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    {showPassword ? (
                      <i
                        className="fa fa-eye"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      ></i>
                    )}
                  </InputAdornment>
                }
                size="small"
                className="col-12"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
          </div>
          <div className="form-group col-12 row">
            <label className="col-12 col-md-4 control-label">
              Mật khẩu Mới:
            </label>
            <div className="col-12 col-md-8">
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    {showPassword ? (
                      <i
                        className="fa fa-eye"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      ></i>
                    )}
                  </InputAdornment>
                }
                size="small"
                className="col-12"
                type={showPassword ? "text" : "password"}
                value={newPassWord}
                onChange={({ target }) => setNewPassWord(target.value)}
              />
            </div>
          </div>
          <div className="form-group col-12 row">
            <label className="col-12 col-md-4 control-label">Nhập lại:</label>
            <div className="col-12 col-md-8">
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    {showPassword ? (
                      <i
                        className="fa fa-eye"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      ></i>
                    )}
                  </InputAdornment>
                }
                size="small"
                className="col-12"
                type={showPassword ? "text" : "password"}
                value={reNewPass}
                onChange={({ target }) => setReNewPass(target.value)}
              />
            </div>
          </div>
          <div className="form-group col-12 row">
            <label className="col-12 col-md-3 control-label"></label>
            <div className="col-12 col-md-8">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleChangePass()}
              >
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
