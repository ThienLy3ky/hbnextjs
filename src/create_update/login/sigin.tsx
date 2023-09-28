import { useEffect, useState } from "react";
import { OutlinedInput, InputAdornment } from "@mui/material";
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
// import { GoogleLogin } from "@react-oauth/google";
export default function Sigin(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmails, setValidateEmails] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const url = useRouter();
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (!email || !password || validateEmails || validatePassword || loading) {
      setValidateEmails(!email || validateEmails);
      setValidatePassword(!password || validatePassword);
      showNotificationError("Email or password incorect");
      return;
    }
    setLoading(true);
    const res = await UserAdminService.login({ email, password });
    const { access_token, role } = res;

    if (res) {
      if (access_token) {
        const { accessToken, refreshToken } = access_token;
        dispatch(
          setUserData({ token: accessToken, refreshToken: refreshToken })
        );
        dispatch(setRole(role));
        showNotificationSuccess("Đăng nhập thành công ");
        url.replace(role === "admin" ? "./manager" : "./");
      } else {
        url.replace({ query: { verify: email } });
      }

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
        <GoogleLogin
          clientId={clientId ?? ""}
          render={(renderProps) => (
            <button
              type="button"
              onClick={renderProps.onClick}
              className="social p-2"
            >
              <i className="fab fa-google-plus-g"></i>
            </button>
          )}
          onSuccess={(
            response: GoogleLoginResponse | GoogleLoginResponseOffline
          ) => {
            console.log(response);
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
        <a href="#" className="social">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <span>hoặc sử dụng tài khoản</span>
      <OutlinedInput
        type="email"
        placeholder="Email"
        size="small"
        className="col col-12"
        onChange={({ target }) => {
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
        className="col col-12"
        type={showPassword ? "text" : "password"}
        size="small"
        onChange={({ target }) => {
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
