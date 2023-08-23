import "@/public/static/css/login.css";
import Script from "next/script";
import LoginLayout from "@/src/component/layout/login.layout";
import { useEffect, useState } from "react";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatErr, setValidatErr] = useState();
  const login = () => {};
  const sigin = () => {};
  return (
    <LoginLayout>
      <div className="container" id="container">
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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Đăng nhập</button>
          </form>
        </div>
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Bạn quên mật khẩu?</a>
            <button>Đăng nhập</button>
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
      </div>

      <Script
        type="text/javascript"
        src="/static/js/login.js"
        strategy="lazyOnload"
      ></Script>
    </LoginLayout>
  );
}
