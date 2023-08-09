import InputCol from "@/src/component/input/input.col";
import InputRow from "@/src/component/input/input.row";
import AdminLayout from "@/src/component/layout/client.admin";

export default function Darboard() {
  return (
    <AdminLayout>
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Horizontal Two column</h4>
            <form className="form-sample">
              <p className="card-description"> Personal info </p>
              <div className="row">
                <div className="col">
                  <InputRow
                    row={true}
                    type="text"
                    placeholder=""
                    label="text"
                    change={(e: any) => console.log(e)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
