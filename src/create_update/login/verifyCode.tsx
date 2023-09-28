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
import Link from "next/link";
import CountDownBtn from "@/src/component/countDown";

export default function VerifyCode(props: any) {
  const { email = "" } = props;
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const url = useRouter();
  const [exp, setExp] = useState<any>();
  const today = new Date();

  const handerSend = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (code?.length === 5 && !loading) {
      const res = await UserAdminService.verifyCode({ email, code });
      if (res) {
        showNotificationSuccess(email + " Xác thực thành công!");
        url.replace("/login");
      }
    }
    showNotificationError("Mã code chưa chính xác");
    setLoading(false);
  };
  const handerReCode = async () => {
    if (!exp) {
      setLoading(true);
      const res = await UserAdminService.reCode(email);
      const { message, exp, expVerify } = res;
      setExp(exp ?? expVerify ?? undefined);
      setCode("");
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handerSend} style={{ alignItems: "unset" }}>
      <h1>Xác thực</h1>
      <span>Mã code đã được gửi đến {email} của bạn</span>
      <input
        type="text"
        minLength={5}
        maxLength={5}
        placeholder="Nhập mã code"
        onBlur={({ target }) => {
          setCode(target.value);
        }}
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
        <button disabled={loading} type="submit">
          Xác nhận{" "}
        </button>
        {!exp ? (
          <button
            disabled={loading}
            type="button"
            className="forgot ml-3"
            onClick={() => (loading ? handerReCode() : {})}
          >
            Gửi lại mã code
          </button>
        ) : (
          <CountDownBtn
            time={new Date(exp).getTime() - today.getTime()}
            setExp={setExp}
          />
        )}
      </div>
      <div style={{ color: "blue", textAlign: "left" }}>
        <Link href="/login" style={{ color: "blue", textAlign: "left" }}>
          <i> Đăng nhập ?</i>
        </Link>
      </div>
    </form>
  );
}
