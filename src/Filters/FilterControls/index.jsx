import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const FilterControls = ({
  filterFuncDetails,
  checks,
  disabled,
  handleCheck,
  andBool,
  handleBoolChange,
}) => {
  return (
    <Box>
      <RadioGroup value={andBool} onChange={handleBoolChange}>
        <FormControlLabel value={true} contro={<Radio />} label="And" />
        <FormControlLabel value={false} contro={<Radio />} label="Or" />
      </RadioGroup>
      {filterFuncDetails.map(([label], i) => (
        <FormControlLabel
          control={<Checkbox checked={checks[i]} onChange={handleCheck(i)} />}
          disabled={disabled}
          label={label}
          key={i}
        />
      ))}
    </Box>
  );
};

export default FilterControls;
