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
            Sorting
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              Latest
            </a>
            <a className="dropdown-item" href="#">
              Popularity
            </a>
            <a className="dropdown-item" href="#">
              Best Rating
            </a>
          </div>
        </div>
        <div className="btn-group ml-2">
          <button
            type="button"
            className="btn btn-sm btn-light dropdown-toggle"
            data-toggle="dropdown"
          >
            Showing
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              10
            </a>
            <a className="dropdown-item" href="#">
              20
            </a>
            <a className="dropdown-item" href="#">
              30
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
