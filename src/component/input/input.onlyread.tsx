import { AccordionSummary, Typography } from "@mui/material";
export default function InputOnlyRead(props: any) {
  const { alignLabel, row, className, label, value, ...prop } = props;
  return (
    <AccordionSummary className={className}>
      <Typography
        className="col-md-4 d-flex align-items-center pr-2 "
        style={{
          fontWeight: "bolder",
          color: "darkblue",
          textAlign: alignLabel || "left",
        }}
      >
        {label}
      </Typography>
      <Typography
        className="col-md-8 d-flex align-items-end p-1 pr-2 pl-2 "
        style={{
          textAlign: alignLabel || "left",
          border: "1px #d1caca solid",
          borderRadius: "10px",
        }}
      >
        {value || "Chưa có dữ liệu"}
      </Typography>
    </AccordionSummary>
  );
}
