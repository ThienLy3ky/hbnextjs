import { formatNumber, formatString } from "@/src/utils/action.helper";
import { TextField } from "@mui/material";
import UploadInput from "./input.upload";

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
    code,
    older,
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
        className={
          row ? "col-sm-3 col-form-label pl-4" : "col-12 col-form-label pl-4"
        }
        style={{
          fontWeight: "bolder",
          color: "darkblue",
          textAlign: alignLabel || "left",
        }}
      >
        {label}
      </label>
      <div
        className={
          row
            ? "col-sm-9 pl-0"
            : "col-12 col-form-label pl-4  d-flex justify-content-center"
        }
      >
        {textarea ? (
          <textarea
            name={name}
            value={value}
            id="outlined-error"
            label={error ? error : ""}
            // defaultValue={value}
            size="small"
            style={{ padding: "5px", width: "100%" }}
            {...prop}
            onChange={(e) => change(formatString(e.target.value))}
          />
        ) : type === "number" || type === "money" ? (
          <TextField
            name={name}
            type="text"
            error={!error ? false : true}
            value={Number(value).toLocaleString()}
            id="outlined-error"
            label={error ? error : ""}
            // defaultValue={value}
            size="small"
            style={{ padding: "5px", width: "100%" }}
            {...prop}
            onChange={(e) => change(formatNumber(e.target.value))}
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
            onChange={(e) => change(formatString(e.target.value))}
          />
        )}
      </div>
    </div>
  );
}
