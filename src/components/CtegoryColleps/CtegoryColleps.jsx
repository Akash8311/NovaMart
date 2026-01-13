import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

const CtegoryColleps = () => {
  return (
    <div style={{ width: "100%", padding: "0px" }}>
      <div className="scroll">
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Fashion" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Electronics" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Bags" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Footwear" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Groceries" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Beauty" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Wellness" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Jewellery" />
        </FormGroup>
      </div>
    </div>
  );
};

export default CtegoryColleps;
