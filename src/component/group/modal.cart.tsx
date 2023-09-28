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
import { useEffect, useState } from "react";
export default function GroupAddCart(props: any) {
  const { data, value, setValue } = props;
  const [List, setList] = useState(data);
  const [Groups, setGroups] = useState<object[]>([]);
  const [Styles, setStyles] = useState<object[]>([]);
  const [Sizes, setSizes] = useState<object[]>([]);
  const [groups, setGroup] = useState<string>();
  const [styles, setStyle] = useState<string>();
  const [sizes, setSize] = useState<string>();
  useEffect(() => {
    setSizes([]);
    setStyles([]);
    setGroups([]);
    let sizes: object[] = [],
      styles: object[] = [],
      groups: object[] = [];
    data?.map(({ size, style, group }: any) => {
      sizes = [...sizes, size];
      styles = [...styles, style];
      groups = [...groups, group];
    });
    setSizes([
      ...Sizes,
      ...sizes.filter(
        (v: any, i, a) => a.findIndex((v2: any) => v2._id === v._id) === i
      ),
    ]);
    setStyles([
      ...Styles,
      ...styles.filter(
        (v: any, i, a) => a.findIndex((v2: any) => v2._id === v._id) === i
      ),
    ]);
    setGroups([
      ...Groups,
      ...groups.filter(
        (v: any, i, a) => a.findIndex((v2: any) => v2._id === v._id) === i
      ),
    ]);
  }, []);

  const handleChange = ({
    sizeI,
    styleI,
    groupI,
  }: {
    sizeI?: string;
    styleI?: string;
    groupI?: string;
  }) => {
    if (sizeI) setSize(sizeI);
    if (styleI) setStyle(styleI);
    if (groupI) setGroup(groupI);
    if ((sizeI ?? sizes) && (styleI ?? styles) && (groupI ?? groups))
      setValue(
        data.filter(
          ({ size, style, group }: any) =>
            size._id === (sizeI ?? sizes) &&
            (styleI ?? styles) === style._id &&
            (groupI ?? groups) === group._id
        )[0]
      );
  };
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
          expandIcon={<i className="fa-solid fa-sort-down" />}
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
            // defaultValue={value?.size?._id}
            name="radio-buttons-group"
            className="group-radio"
          >
            {Sizes?.map((element: any, index: number) =>
              element ? (
                <FormControlLabel
                  key={index}
                  value={element?._id}
                  control={<Radio className="p-0 pl-3" />}
                  label={element?.name}
                  onChange={() => {
                    handleChange({ sizeI: element._id });
                  }}
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
          expandIcon={<i className="fa-solid fa-sort-down" />}
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
            // defaultValue={value?.style?._id}
            name="radio-buttons-group"
            className="group-radio"
          >
            {Styles?.map((element: any, index: number) =>
              element ? (
                <FormControlLabel
                  key={index}
                  value={element?._id}
                  control={<Radio className="p-0 pl-3" />}
                  label={element?.name}
                  onChange={() => {
                    handleChange({ styleI: element?._id });
                  }}
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
          expandIcon={<i className="fa-solid fa-sort-down" />}
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
            // defaultValue={value?.group?._id}
            name="radio-buttons-group"
            className="group-radio "
          >
            {Groups?.map((element: any, index: number) =>
              element ? (
                <FormControlLabel
                  key={index}
                  value={element?._id}
                  control={<Radio className="p-0 pl-3" />}
                  label={element?.name}
                  onChange={() => {
                    handleChange({ groupI: element?._id });
                  }}
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
