import { TextField } from "@mui/material";

export default function InputRow(props: any) {
  const {
    alignLabel,
    row,
    classname,
    error,
    label,
    value,
    change,
    type,
    name,
    textarea,
    ...prop
  } = props;
  return (
    <div
      className={
        row ? "form-group row align-items-end" : "form-group align-items-end "
      }
    >
      <label
        className="col-sm-3 col-form-label"
        style={{
          fontWeight: "bolder",
          color: "darkblue",
          textAlign: alignLabel || "left",
        }}
      >
        {label}
      </label>
      <div className="col-sm-9 pl-0">
        {textarea ? (
          <textarea
            name={name}
            type={type}
            value={value}
            id="outlined-error"
            label={error ? error : ""}
            // defaultValue={value}
            size="small"
            style={{ padding: "5px", width: "100%" }}
            {...prop}
            onChange={change}
          />
        ) : (
          <TextField
            name={name}
            type={type}
            error={!error ? false : true}
            value={value}
            id="outlined-error"
            label={error ? error : ""}
            // defaultValue={value}
            size="small"
            style={{ padding: "5px", width: "100%" }}
            {...prop}
            onChange={change}
          />
        )}
      </div>
    </div>
  );
}
