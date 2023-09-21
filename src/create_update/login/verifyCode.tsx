import "@/public/static/css/login.css";
import Script from "next/script";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import UserAdminService from "@/src/controller/api/login.api";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/src/component/notification/notificationFc";

export default function VerifyCode(props: any) {
  const [userName, setUserName] = useState("");
  const [validatErr, setValidatErr] = useState(false);

  return (
    <form>
      <h1>Xác thực</h1>
      <span>Mã code đã được gửi đến email của bạn</span>
      <input
        type="text"
        placeholder="Nhập mã code"
        onBlur={({ target }) => {}}
      />
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
      <div>
        <button onClick={() => {}}>Xác nhận </button>
        <button className="forgot"> Gửi lại mã code </button>
      </div>
    </form>
  );
}
