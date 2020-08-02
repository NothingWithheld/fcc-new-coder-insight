import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import FilterControls from "./FilterControls";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { calcAvgEarnings, orFilterFuncs, andFilterFuncs } from "../utils";
import { withStyles } from "@material-ui/core/styles";

const SpacedChip = withStyles({ root: { margin: "0 4px" } })(Chip);

const Filters = ({ filterFuncDetails, rowData, allAvg }) => {
  const [savedChecks, setSavedChecks] = useState([
    filterFuncDetails.map(() => false),
  ]);
  const [savedAndBools, setSavedAndBools] = useState(["true"]);
  const [savedAvgs, setSavedAvgs] = useState([allAvg]);
  const [usingInd, setUsingInd] = useState(null);
  const [checks, setChecks] = useState(() =>
    filterFuncDetails.map(() => false)
  );
  const [andBool, setAndBool] = useState("true");

  const handleCheck = (i) => () =>
    setChecks(checks.map((bool, ii) => (ii === i ? !bool : bool)));

  const handleBoolChange = (event) => setAndBool(event.target.value);

  const handleSwitch = (i) => () => setUsingInd(i);

  const handleDelete = (i) => () => {
    if (i === usingInd) {
      setUsingInd(null);
    }

    setSavedChecks(savedChecks.filter((_, ii) => i !== ii));
    setSavedAndBools(savedAndBools.filter((_, ii) => i !== ii));
    setSavedAvgs(savedAvgs.filter((_, ii) => i !== ii));
  };

  const submitSelection = () => {
    setSavedChecks([...savedChecks, checks]);
    setSavedAndBools([...savedAndBools, andBool]);
    const filterFuncs = filterFuncDetails
      .map(([label, func]) => func)
      .filter((_, i) => checks[i]);
    setSavedAvgs([
      ...savedAvgs,
      calcAvgEarnings(
        rowData.filter(
          andBool ? andFilterFuncs(filterFuncs) : orFilterFuncs(filterFuncs)
        )
      ),
    ]);

    setChecks(filterFuncDetails.map(() => false));
    setUsingInd(null);
    setAndBool("true");
  };

  return (
    <Box>
      <Box>
        {savedChecks.map((_, i) =>
          i === 0 ? (
            <SpacedChip
              label={`Selection ${i + 1}`}
              onClick={handleSwitch(i)}
              key={i}
              margin="0 4px"
            />
          ) : (
            <SpacedChip
              label={`Selection ${i + 1}`}
              onClick={handleSwitch(i)}
              onDelete={handleDelete(i)}
              key={i}
            />
          )
        )}
        <SpacedChip
          label={`Current Selection`}
          onClick={() => setUsingInd(null)}
        />
      </Box>
      <FilterControls
        filterFuncDetails={filterFuncDetails}
        checks={usingInd !== null ? savedChecks[usingInd] : checks}
        disabled={usingInd !== null}
        handleCheck={handleCheck}
        handleBoolChange={handleBoolChange}
        andBool={usingInd !== null ? savedAndBools[usingInd] : andBool}
      />
      <Button
        onClick={submitSelection}
        disabled={
          usingInd !== null || checks.reduce((acc, bool) => acc && !bool, true)
        }
        variant="contained"
        color="primary"
      >
        Add Selection
      </Button>
    </Box>
  );
};

export default Filters;
