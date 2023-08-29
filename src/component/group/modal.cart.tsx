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
export default function GroupAddCart() {
  return<div
                className="col-4 p-0 "
                style={{
                  maxHeight: "400px",
                  overflow: "auto",
                }}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={<i className="fas fa-sort-down" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="m-0 head-group"
                  >
                    <div className="m-0">Kich co</div>
                  </AccordionSummary>
                  <AccordionDetails className="col pl-2">
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      className="group-radio"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio className="p-0 pl-3" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio className="p-0 pl-3" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio className="p-0 pl-3" />}
                        label="Other"
                      />
                    </RadioGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<i className="fas fa-sort-down" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="m-0 head-group"
                  >
                    <div className="m-0">Kieu dang</div>
                  </AccordionSummary>
                  <AccordionDetails className="col pl-2">
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      className="group-radio"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio className="p-0 pl-3" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio className="p-0 pl-3" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio className="p-0 pl-3" />}
                        label="Other"
                      />
                    </RadioGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<i className="fas fa-sort-down" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="m-0 head-group"
                  >
                    <div className="m-0">Kieu dang</div>
                  </AccordionSummary>
                  <AccordionDetails
                    className="col pl-2"
                    style={{ display: "inline-grid" }}
                  >
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      className="group-radio "
                    >
                      <div className="col-md-6 p-0">
                        <FormControlLabel
                          value="female"
                          control={<Radio className="p-0 pl-3" />}
                          label="Female"
                        />
                      </div>
                      <div className="col-md-6 p-0">
                        <FormControlLabel
                          value="male"
                          control={<Radio className="p-0 pl-3" />}
                          label="Male"
                        />
                      </div>
                      <div className="col-md-6 p-0">
                        <FormControlLabel
                          value="other"
                          control={<Radio className="p-0 pl-3" />}
                          label="Other"
                        />
                      </div>
                    </RadioGroup>
                  </AccordionDetails>
                </Accordion>
              </div>;
}
