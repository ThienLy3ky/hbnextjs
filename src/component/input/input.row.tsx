import { TextField } from "@mui/material";

export default function InputRow(props: any) {
  const { row, classname, error, label, change, type, ...prop } = props;
  return (
    <div className={row ? "form-group row" : "form-group"}>
      <label className="col-sm-2 col-form-label">{label}</label>
      <div className="col-sm-10">
        <TextField
          type={type}
          error={error}
          id="outlined-error"
          label={error ? error : ""}
          defaultValue=""
          size="small"
          style={{ padding: "5px", width: "100%" }}
        />
      </div>
    </div>
  );
}
