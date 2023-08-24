import Header from "@/src/component/header/index.client";
import ToastProvider from "../notification";
export default function LoginLayout({ children }: any) {
  return (
    <ToastProvider>
      <Header />
      <div className="body">{children}</div>
    </ToastProvider>
  );
}
