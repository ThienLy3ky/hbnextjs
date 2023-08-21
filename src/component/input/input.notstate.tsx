import { formatNumber, formatString } from "@/src/utils/action.helper";
import { TextField } from "@mui/material";
import UploadInput from "./input.upload";
import { AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";
export default function InputNotState(props: any) {
  const {
    alignLabel,
    row,
    classname,
    error,
    label,
    change,
    type,
    name,
    code,
    older,
    defaultValue,
    textarea,
    ...prop
  } = props;
  const [value, setValue] = useState(0);
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
            id="outlined-error"
            label={error ? error : ""}
            value={
              value
                ? Number(value || 0).toLocaleString()
                : Number(defaultValue || 0).toLocaleString()
            }
            size="small"
            style={{ padding: "5px", width: "100%", background: "white" }}
            {...prop}
            onChange={(e) => {
              setValue(formatNumber(e.target.value));
              change(formatNumber(e.target.value));
            }}
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
