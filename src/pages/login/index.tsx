import "@/public/static/css/login.css";
import Script from "next/script";
import LoginLayout from "@/src/component/layout/login.layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Signup from "@/src/create_update/login/signup";
import Sigin from "@/src/create_update/login/sigin";
import ForgotPass from "@/src/create_update/login/forgotPass";
import VerifyCode from "@/src/create_update/login/verifyCode";
export default function Login() {
  const [verify, setVerify] = useState(false);
  const url = useRouter();
  const dispatch = useDispatch();
  const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <LoginLayout>
      <div className="container-login" id="container">
        {/* sigup */}
        <div className="form-container sign-up-container">
          <Signup setVerify={setVerify} />
        </div>
        {/* login */}
        <div className="form-container sign-in-container">
          <Sigin setVerify={setVerify} />
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
          <ForgotPass />
        </div>
        <div
          className={
            verify
              ? "verify-code d-flex align-items-center justify-content-center active"
              : "verify-code d-flex align-items-center justify-content-center"
          }
        >
          <VerifyCode />
          {/* <GoogleLogin
            clientId={clientId ?? ""}
            // onSuccess={(
            //   response: GoogleLoginResponse | GoogleLoginResponseOffline
            // ) => {
            //   console.log(response);
            // }}
            onFailure={(err) => {
              console.log(err);
            }}
          /> */}
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
