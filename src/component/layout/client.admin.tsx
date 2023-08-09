import "@/public/static/library/css/materialdesignicons.min.css";
import "@/public/static/library/css/style.admin.css";
import { MenuAdmin } from "@/src/component/menu/index.admin";
import Script from "next/script";
export default function AdminLayout({ children }: any) {
  return (
    <div className="container-scroller">
      <MenuAdmin />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">{children}</div>
        </div>
      </div>
      <Script type="text/javascript" src="/static/library/js/index.js"></Script>
    </div>
  );
}
