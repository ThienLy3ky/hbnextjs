export default function Pagination({ data }: any) {
  const { limit, total, page } = data;
  return (
    <div className="col-12">
      <nav>
        <ul className="pagination justify-content-center">
          {page - 3 > 1 ? (
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
          ) : (
            ""
          )}
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          {page + 3 < total / limit ? (
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </div>
  );
}
