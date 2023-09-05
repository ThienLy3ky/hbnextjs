export default function SortClient() {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div>
        <button className="btn btn-sm btn-light">
          <i className="fa fa-th-large"></i>
        </button>
        <button className="btn btn-sm btn-light ml-2">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="ml-2">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-sm btn-light dropdown-toggle"
            data-toggle="dropdown"
          >
            Sắp Xếp
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              Mới nhất
            </a>
            <a className="dropdown-item" href="#">
              Bán chạy nhất
            </a>
            <a className="dropdown-item" href="#">
              Phổ biến nhất
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
