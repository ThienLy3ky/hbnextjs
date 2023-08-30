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
export default function Login() {
  const [userName, setUserName] = useState("");
  const [validatErr, setValidatErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmails, setValidateEmails] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [emailSG, setEmailSG] = useState("");
  const [passwordSG, setPasswordSG] = useState("");
  const [validateEmailsSG, setValidateEmailsSG] = useState(false);
  const [validatePasswordSG, setValidatePasswordSG] = useState(false);
  const [validatePasswordRSG, setValidatePasswordRSG] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = useRouter();
  const dispatch = useDispatch();
  const login = () => {};
  const sigin = () => {};
  const handleLogin = async () => {
    setLoading(true);
    if (!email || !password || validateEmails || validatePassword) {
      setValidateEmails(!email || validateEmails);
      setValidatePassword(!password || validatePassword);
      showNotificationError("Email or password incorect");
      setLoading(false);
      return;
    }
    const res = await UserAdminService.login({ email, password });
    console.log("🚀 ~ file: index.tsx:37 ~ handleLogin ~ res:", res);
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
  const handleSingUp = () => {
    redirect("/manager");
  };
  const handleForgotPass = () => {
    redirect("/manager");
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
    <LoginLayout>
      <div className="container-login" id="container">
        {/* sigup */}
        <div className="form-container sign-up-container">
          <form action="#">
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
                validatePasswords(target.value)
                  ? setPasswordSG(target.value)
                  : "";
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
            <button onClick={handleSingUp}>Đăng kí</button>
          </form>
        </div>
        {/* login */}
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Đăng nhập</h1>
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
                validatePasswords(target.value)
                  ? setPassword(target.value)
                  : "";
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
            <button disabled={loading} onClick={handleLogin}>
              Đăng nhập
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Đăng nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Hãy trở thành một thành viên để nhận nhiều ưu đã bất ngờ đến từ
                chúng tôi!
              </p>
              <button className="ghost" id="signUp">
                Tạo tài khoản
              </button>
            </div>
          </div>
        </div>
        {/* forgot pass */}
        <div className="forgot-password d-flex align-items-center justify-content-center">
          <form action="#">
            <h1>Quên mật khẩu</h1>
            <span>Nhập email của bạn</span>
            <input
              type="email"
              placeholder="Nhập email của bạn"
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
            <div>
              <button onClick={handleForgotPass}>Send </button>
              <button className="forgot">Hủy </button>
            </div>
          </form>
        </div>
      </div>

      <Script
        type="text/javascript"
        src="/static/js/login.js"
        strategy="lazyOnload"
      ></Script>
    </LoginLayout>
  );
}
