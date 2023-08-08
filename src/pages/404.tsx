import Link from "next/link";
import "@/public/static/library/css/style.css";
export default function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="co col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Trang không tồn tại</h3>

                <p>Bạn vui lòng kiểm tra lại địa chỉ!</p>

                <Link href="/" className="link_404">
                  Quay về trang chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
