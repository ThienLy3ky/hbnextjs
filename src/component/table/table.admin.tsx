export default function TableAdmin() {
  return (
    <div className="card-body">
      <h4 className="card-title">Basic Table</h4>
      <p className="card-description">
        {" "}
        Add class <code>.table</code>
      </p>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="sorting">Profile</th>
              <th className="sorting">VatNo.</th>
              <th className="sorting">Created</th>
              <th className="sorting"> Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-hover">
              <td>Jacob</td>
              <td>53275531</td>
              <td>12 May 2017</td>
              <td>
                <label className="badge badge-danger">Pending</label>
              </td>
            </tr>
            <tr className="table-hover">
              <td>Messsy</td>
              <td>53275532</td>
              <td>15 May 2017</td>
              <td>
                <label className="badge badge-warning">In progress</label>
              </td>
            </tr>
            <tr className="table-hover">
              <td>John</td>
              <td>53275533</td>
              <td>14 May 2017</td>
              <td>
                <label className="badge badge-info">Fixed</label>
              </td>
            </tr>
            <tr className="table-hover">
              <td>Peter</td>
              <td>53275534</td>
              <td>16 May 2017</td>
              <td>
                <label className="badge badge-success">Completed</label>
              </td>
            </tr>
            <tr className="table-hover">
              <td>Dave</td>
              <td>53275535</td>
              <td>20 May 2017</td>
              <td>
                <label className="badge badge-warning">In progress</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
