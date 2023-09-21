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
export default function Sigin(props: any) {
  const { setVerify } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmails, setValidateEmails] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = useRouter();
  const dispatch = useDispatch();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password || validateEmails || validatePassword) {
      setValidateEmails(!email || validateEmails);
      setValidatePassword(!password || validatePassword);
      showNotificationError("Email or password incorect");
      setLoading(false);
      return;
    }
    const res = await UserAdminService.login({ email, password });
    const { access_token, role } = res;

    if (res) {
      const { accessToken, refreshToken } = access_token;
      dispatch(setUserData({ token: accessToken, refreshToken: refreshToken }));
      dispatch(setRole(role));
      showNotificationSuccess("Đăng nhập thành công ");
      url.replace(role === "admin" ? "./manager" : "./");

      //
    } else {
      showNotificationError("Đăng nhập thất bại");
      dispatch(setUserData(null));
      dispatch(setRole(""));
    }
    setLoading(false);
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
    <form onSubmit={handleLogin}>
      <h1>Đăng nhập</h1>
      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a onClick={() => {}} className=" social">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <span>hoặc sử dụng tài khoản</span>
      <input
        type="email"
        placeholder="Email"
        onBlur={({ target }) => {
          setValidateEmails(!validateEmail(target.value));
          validateEmail(target.value) ? setEmail(target.value) : "";
        }}
      />
      {validateEmails ? (
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
          setValidatePassword(!validatePasswords(target.value));
          validatePasswords(target.value) ? setPassword(target.value) : "";
        }}
      />
      {validatePassword ? (
        <i
          style={{
            color: "red",
            fontSize: "x-small",
            textAlign: "left",
            width: "100%",
          }}
        >
          Mật khẩu sai
        </i>
      ) : (
        ""
      )}
      <a href="#" className="forgot">
        Bạn quên mật khẩu?
      </a>
      <button disabled={loading} type="submit">
        Đăng nhập
      </button>
    </form>
  );
}
