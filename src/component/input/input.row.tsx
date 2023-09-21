import {
  formatLinkString,
  formatNumber,
  formatString,
} from "@/src/utils/action.helper";
import { TextField } from "@mui/material";
import { AccordionSummary, Typography } from "@mui/material";
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
    defaultValue,
    textarea,
    ...prop
  } = props;
  return (
    <AccordionSummary className="box-shawder-bt ">
      <Typography
        className="col-md-2 pb-2 d-flex align-items-end"
        style={{
          fontWeight: "bolder",
          color: "darkblue",
          textAlign: alignLabel || "left",
        }}
      >
        {label}
      </Typography>
      <div style={{ color: "text.secondary" }} className="col-md-10">
        {textarea ? (
          <textarea
            name={name}
            value={value}
            id="outlined-error"
            label={error ? error : ""}
            defaultValue={defaultValue}
            size="small"
            style={{ padding: "5px", width: "100%", background: "white" }}
            {...prop}
            onChange={(e) => change(formatString(e.target.value))}
          />
        ) : type === "number" || type === "money" ? (
          <TextField
            name={name}
            type="text"
            error={!error ? false : true}
            value={value ? Number(value).toLocaleString() : undefined}
            id="outlined-error"
            label={error ? error : ""}
            defaultValue={
              !value ? Number(defaultValue).toLocaleString() : undefined
            }
            size="small"
            style={{ padding: "5px", width: "100%", background: "white" }}
            {...prop}
            onChange={(e) => change(formatNumber(e.target.value))}
          />
        ) : type === "link" ? (
          <TextField
            name={name}
            type={type}
            error={!error ? false : true}
            value={value}
            id="outlined-error"
            label={error ? error : ""}
            defaultValue={defaultValue}
            size="small"
            style={{ padding: "5px", width: "100%", background: "white" }}
            {...prop}
            onChange={(e) => change(formatLinkString(e.target.value))}
          />
        ) : (
          <TextField
            name={name}
            type={type}
            error={!error ? false : true}
            value={value}
            id="outlined-error"
            label={error ? error : ""}
            defaultValue={defaultValue}
            size="small"
            style={{ padding: "5px", width: "100%", background: "white" }}
            {...prop}
            onChange={(e) => change(formatString(e.target.value))}
          />
        )}
      </div>
    </AccordionSummary>
  );
}
