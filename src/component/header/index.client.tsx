import NameShop from "@/src/component/logo/name";

const Header = (props: any) => {
  const { data } = props;
  return (
    <div className="container-fluid">
      <div
        className="row align-items-center py-3 px-xl-5 d-none d-lg-flex"
        style={{ background: "#0f62f9 ", color: "white", fontWeight: "bold" }}
      >
        <div className="col-lg-6">
          <NameShop href="/" className="text-decoration-none" />
        </div>

        <div className="col-lg-6 col-6 text-right">
          <p className="m-0">Hot line</p>
          <h5 className="m-0">+012 345 6789</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
