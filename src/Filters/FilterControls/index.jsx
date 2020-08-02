import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";

const OverflowBox = withStyles({
  root: {
    overflowY: "scroll",
  },
})(Box);

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
      marginBottom="14px"
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
      <OverflowBox display="flex" flexDirection="column" maxHeight="550px">
        {filterFuncDetails.map(([label], i) => (
          <FormControlLabel
            control={<Checkbox checked={checks[i]} onChange={handleCheck(i)} />}
            disabled={disabled}
            label={label}
            key={i}
          />
        ))}
      </OverflowBox>
    </Box>
  );
};

export default FilterControls;
