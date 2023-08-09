export default function InputRow(props: any) {
  const { row, classname, error, label, change, ...prop } = props;
  return (
    <div className={row ? "form-group row" : "form-group"}>
      <label className="col-sm-3 col-form-label">{label}</label>
      <div className="col-sm-9">
        <input
          {...prop}
          className="form-control"
          onChange={(e) => change(e.target.value)}
        />
        <i style={{ color: "red", marginLeft: "10px", fontSize: "0.8rem" }}>
          error
        </i>
      </div>
    </div>
  );
}
