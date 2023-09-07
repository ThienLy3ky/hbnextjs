export default function Pagination({ data }: any) {
  const { limit, total, page = 1 } = data;
  return (
    <div className="col-12">
      <nav>
        <ul className="pagination justify-content-center">
          {parseInt(page) - 3 > 1 ? (
            <li className="page-item ">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
          ) : (
            ""
          )}
          {parseInt(page) - 2 > 1 ? (
            <li className="page-item ">
              <a className="page-link" href="#">
                {parseInt(page) - 2}
              </a>
            </li>
          ) : (
            ""
          )}
          {parseInt(page) - 1 > 1 ? (
            <li className="page-item ">
              <a className="page-link" href="#">
                {parseInt(page) - 1}
              </a>
            </li>
          ) : (
            ""
          )}
          <li className="page-item active">
            <a className="page-link" href="#">
              {page}
            </a>
          </li>
          {parseInt(page) + 1 < total / limit ? (
            <li className="page-item ">
              <a className="page-link" href="#">
                {parseInt(page) + 1}
              </a>
            </li>
          ) : (
            ""
          )}
          {parseInt(page) + 2 < total / limit ? (
            <li className="page-item ">
              <a className="page-link" href="#">
                {parseInt(page) + 2}
              </a>
            </li>
          ) : (
            ""
          )}
          {parseInt(page) + 3 < total / limit ? (
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
