import "@/public/static/css/login.css";
import { OutlinedInput, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserAdminService from "@/src/controller/api/login.api";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
export default function Signup(props: any) {
  const { setVerify } = props;
  const [userName, setUserName] = useState("");
  const [validatErr, setValidatErr] = useState(false);
  const [emailSG, setEmailSG] = useState("");
  const [passwordSG, setPasswordSG] = useState("");
  const [validateEmailsSG, setValidateEmailsSG] = useState(false);
  const [validatePasswordSG, setValidatePasswordSG] = useState(false);
  const [validatePasswordRSG, setValidatePasswordRSG] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const url = useRouter();
  const handleSingUp = async (e: any) => {
    e.preventDefault();

    if (
      !emailSG ||
      !passwordSG ||
      !userName ||
      validateEmailsSG ||
      validatePasswordSG ||
      validatePasswordRSG ||
      validatErr ||
      loading
    ) {
      setValidateEmailsSG(!emailSG || validateEmailsSG);
      setValidatePasswordSG(!passwordSG || validatePasswordSG);
      showNotificationError("Email or password incorect");
      return;
    }
    setLoading(true);
    const res = await UserAdminService.signup({
      emailSG,
      passwordSG,
      userName,
    });
    if (res) {
      showNotificationError("tài khoản của bạn đã được tạo thành công");
      setTimeout(() => {}, 3000);
      url.replace({ query: { verify: emailSG } });
    }
    setLoading(false);
    // redirect("/manager");
  };
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  function validatePasswords(pw: string) {
    return (
      /[A-Z]/.test(pw) && /[0-9]/.test(pw) && /[a-z]/.test(pw) && pw.length > 8
    );
  }
  return (
    <form onSubmit={handleSingUp}>
      <h1>Tạo Tài khoản</h1>
      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <span>hoặc sử dụng email để đăng kí</span>
      <OutlinedInput
        size="medium"
        className="col col-12"
        type="text"
        placeholder="Name"
        onChange={({ target }) => {
          setValidatErr(!target.value);
          target.value ? setUserName(target.value) : "";
        }}
      />
      <OutlinedInput
        size="medium"
        className="col col-12"
        type="email"
        placeholder="Email"
        onChange={({ target }) => {
          setEmailSG(target.value);
          setValidateEmailsSG(!validateEmail(target.value));
        }}
      />
      {validateEmailsSG ? (
        <i
          style={{
            color: "red",
            fontSize: "x-small",
            textAlign: "left",
            width: "100%",
          }}
        >
          Email không đúng
        </i>
      ) : (
        ""
      )}
      <OutlinedInput
        size="medium"
        endAdornment={
          <InputAdornment position="end">
            {showPassword ? (
              <i
                className="fa-solid fa-eye"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              ></i>
            )}
          </InputAdornment>
        }
        className="col col-12"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        onChange={({ target }) => {
          setValidatePasswordSG(!validatePasswords(target.value));
          validatePasswords(target.value) ? setPasswordSG(target.value) : "";
        }}
      />
      {validatePasswordSG ? (
        <i
          style={{
            color: "red",
            fontSize: "x-small",
            textAlign: "left",
            width: "100%",
          }}
        >
          Mật khẩu phải lớn hơn 8 kí tự và chứa chữ hoa, kí tự dặ biệt, số
        </i>
      ) : (
        ""
      )}
      <OutlinedInput
        size="medium"
        endAdornment={
          <InputAdornment position="end">
            {showPassword ? (
              <i
                className="fa-solid fa-eye"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              ></i>
            )}
          </InputAdornment>
        }
        className="col col-12"
        type={showPassword ? "text" : "password"}
        placeholder="RePassword"
        onChange={({ target }) => {
          setValidatePasswordRSG(target.value !== passwordSG);
        }}
      />
      {validatePasswordRSG ? (
        <i
          style={{
            color: "red",
            fontSize: "x-small",
            textAlign: "left",
            width: "100%",
          }}
        >
          Không khớp với mật khẩu
        </i>
      ) : (
        ""
      )}
      <button disabled={loading} type="submit">
        Đăng kí
      </button>
    </form>
  );
}
