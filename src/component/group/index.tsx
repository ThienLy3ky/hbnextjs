import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
export default function GroupText({ children, label }: any) {
  return (
    <Accordion
      className="mt-2" /* onChange={handleChange('panel3')} */
      /* expanded={expanded === 'panel3'} */
    >
      <AccordionSummary
        expandIcon={
          <i
            style={{ fontSize: " xx-large" }}
            className="mdi mdi-arrow-up-box"
          />
        }
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <div
          className="p-0"
          style={{
            fontWeight: "bolder",
            color: "darkblue",
            flexShrink: 0,
            width: "100%",
          }}
        >
          {label}
        </div>
        <Typography sx={{ color: "text.secondary" }}></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>{children}</div>
      </AccordionDetails>
    </Accordion>
  );
}
