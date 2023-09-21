import "@/public/static/css/login.css";
import Script from "next/script";
import LoginLayout from "@/src/component/layout/login.layout";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setRole, setUserData } from "@/src/controller/redux/slice";
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
  const [userName, setUserName] = useState("");
  const [validatErr, setValidatErr] = useState(false);
  const [emailSG, setEmailSG] = useState("");
  const [passwordSG, setPasswordSG] = useState("");
  const [validateEmailsSG, setValidateEmailsSG] = useState(false);
  const [validatePasswordSG, setValidatePasswordSG] = useState(false);
  const [validatePasswordRSG, setValidatePasswordRSG] = useState(false);
  const [loading, setLoading] = useState(false);
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
      validatErr
    ) {
      setValidateEmailsSG(!emailSG || validateEmailsSG);
      setValidatePasswordSG(!passwordSG || validatePasswordSG);
      showNotificationError("Email or password incorect");
      setLoading(false);
      return;
    }
    const res = await UserAdminService.signup({
      emailSG,
      passwordSG,
      userName,
    });
    if (res) {
      showNotificationError("tài khoản của bạn đã được tạo thành công");
      setTimeout(() => {}, 3000);
      url.reload();
    }
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
      <input
        type="text"
        placeholder="Name"
        onBlur={({ target }) => {
          setValidatErr(!target.value);
          target.value ? setUserName(target.value) : "";
        }}
      />
      <input
        type="email"
        placeholder="Email"
        onBlur={({ target }) => {
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
      <input
        type="password"
        placeholder="Password"
        onBlur={({ target }) => {
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
      <input
        type="password"
        placeholder="RePassword"
        onBlur={({ target }) => {
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
      <button type="submit">Đăng kí</button>
    </form>
  );
}
