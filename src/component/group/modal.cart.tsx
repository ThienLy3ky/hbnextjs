import {
  Accordion,
  Fade,
  AccordionSummary,
  AccordionDetails,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useEffect } from "react";
export default function GroupAddCart(props: any) {
  const { data, value } = props;
  console.log("🚀 ~ file: modal.cart.tsx:13 ~ GroupAddCart ~ value:", value);
  useEffect(() => {}, [props]);

  return (
    <div
      className="col-4 p-0 "
      style={{
        maxHeight: "400px",
        overflow: "auto",
      }}
    >
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<i className="fas fa-sort-down" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="m-0 head-group"
          style={{ background: "#adff2fbd" }}
        >
          <div className="m-0">Kích Cỡ</div>
        </AccordionSummary>
        <AccordionDetails className="col pl-2">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value?.size?._id}
            name="radio-buttons-group"
            className="group-radio"
          >
            {data?.map((element: any, index: number) =>
              element.size ? (
                console.log(
                  element?.size?._id,
                  value?.size?._id,
                  element?.size?._id === value?.size?._id
                )
              ) : (
                <FormControlLabel
                  key={index}
                  value={element?.size?._id}
                  control={<Radio className="p-0 pl-3" />}
                  label={element?.size?.name}
                />
              )
            )}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<i className="fas fa-sort-down" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="m-0 head-group"
          style={{ background: "rgb(255 249 47 / 74%)" }}
        >
          <div className="m-0">Kiểu dáng</div>
        </AccordionSummary>
        <AccordionDetails className="col pl-2">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value?.style?._id}
            name="radio-buttons-group"
            className="group-radio"
          >
            {data?.map((element: any, index: number) =>
              element.style ? (
                <FormControlLabel
                  key={index}
                  value={element?.style?._id}
                  control={<Radio className="p-0 pl-3" />}
                  label={element?.style?.name}
                />
              ) : (
                ""
              )
            )}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<i className="fas fa-sort-down" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="m-0 head-group"
          style={{ background: "rgb(255 162 47 / 74%)" }}
        >
          <div className="m-0">Nhóm</div>
        </AccordionSummary>
        <AccordionDetails
          className="col pl-2"
          style={{ display: "inline-grid" }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value?.group?._id}
            name="radio-buttons-group"
            className="group-radio "
          >
            {data?.map((element: any, index: number) =>
              element.group ? (
                <FormControlLabel
                  key={index}
                  value={element?.style?._id}
                  control={<Radio className="p-0 pl-3" />}
                  label={element?.group?.name}
                />
              ) : (
                ""
              )
            )}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
