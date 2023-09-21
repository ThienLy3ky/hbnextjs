import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
export default function ForgotPass() {
  const [validateEmails, setValidateEmails] = useState(false);
  const [email, setEmail] = useState("");
  const handleForgotPass = () => {
    redirect("/manager");
  };
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  return (
    <form>
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
  );
}
