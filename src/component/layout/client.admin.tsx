import "@/public/static/library/css/materialdesignicons.min.css";
import "@/public/static/library/css/style.admin.css";
import { MenuAdmin } from "@/src/component/menu/index.admin";
import ReduxService from "@/src/controller/redux";
import { useEffect } from "react";
import ToastProvider from "../notification";
import { useSelector } from "react-redux";
export default function AdminLayout({ children, title }: any) {
  useEffect(() => {
    Promise.all([ReduxService.getGroupPrice()]);
  }, []);
  const Roler = useSelector(({ app }) => app.adminRole);
  console.log(
    "🚀 ~ file: client.admin.tsx:13 ~ AdminLayout ~ dataSelect:",
    Roler !== "admin",
    Roler
  );
  return (
    <div className="container-scroller">
      <ToastProvider>
        <MenuAdmin />
        <div className="col-12 container m-0 p-0" style={{ flex: "unset" }}>
          <div
            className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-around"
            style={{ background: "white" }}
          ></div>
          <div
            className="container-fluid page-body-wrapper p-3"
            style={{ background: "#d1e4ff7a" }}
          >
            <h2 className="col-12 title-header">{title}</h2>
            <div className="main-panel " style={{ background: "whitesmoke" }}>
              <div className="content-wrapper">{children}</div>
            </div>
          </div>
        </div>
      </ToastProvider>
    </div>
  );
}
