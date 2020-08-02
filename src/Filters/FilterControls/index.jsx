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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="14px 0"
    >
      <RadioGroup row value={andBool} onChange={handleBoolChange}>
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="And"
          disabled={disabled}
        />
        <FormControlLabel
          value="false"
          control={<Radio />}
          label="Or"
          disabled={disabled}
        />
      </RadioGroup>
      <Box display="flex" flexDirection="column">
        {filterFuncDetails.map(([label], i) => (
          <FormControlLabel
            control={<Checkbox checked={checks[i]} onChange={handleCheck(i)} />}
            disabled={disabled}
            label={label}
            key={i}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FilterControls;
