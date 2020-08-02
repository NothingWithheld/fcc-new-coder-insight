import React, { useState, useCallback } from "react";
import Box from "@material-ui/core/Box";
import FilterControls from "./FilterControls";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { calcAvgEarnings, orFilterFuncs, andFilterFuncs } from "../utils";
import { withStyles } from "@material-ui/core/styles";
import BarChart from "./BarChart";
import Typography from "@material-ui/core/Typography";

const SpacedChip = withStyles({ root: { margin: "4px" } })(Chip);

const Filters = ({ filterFuncDetails, rowData, allAvgData }) => {
  const [savedChecks, setSavedChecks] = useState([
    filterFuncDetails.map(() => false),
  ]);
  const [savedAndBools, setSavedAndBools] = useState(["true"]);
  const [savedAvgs, setSavedAvgs] = useState([allAvgData]);
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
    const filteredRows = rowData.filter(
      andBool === "true"
        ? andFilterFuncs(filterFuncs)
        : orFilterFuncs(filterFuncs)
    );

    setSavedAvgs([
      ...savedAvgs,
      [calcAvgEarnings(filteredRows), filteredRows.length],
    ]);

    setChecks(filterFuncDetails.map(() => false));
    setUsingInd(null);
    setAndBool("true");
  };

  const handleBarClick = useCallback((i) => setUsingInd(i), []);

  return (
    <Box display="flex" marginTop="20px" justifyContent="center">
      <Box marginRight="24px" width="100%" maxWidth="400px">
        <Box marginBottom="16px">
          {savedChecks.map((_, i) =>
            i === 0 ? (
              <SpacedChip
                label="Average of Everyone"
                onClick={handleSwitch(i)}
                key={i}
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
        <Typography variant="h6">
          {usingInd === null
            ? "Edit Current Selection"
            : usingInd === 0
            ? "View Selection of Everyone"
            : `View Selection ${usingInd + 1}`}
        </Typography>
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
            usingInd !== null ||
            savedAvgs.length === 13 ||
            checks.reduce((acc, bool) => acc && !bool, true)
          }
          variant="contained"
          color="primary"
        >
          Add Selection
        </Button>
      </Box>
      <BarChart
        data={savedAvgs}
        handleClick={handleBarClick}
        selectedInd={usingInd}
      />
    </Box>
  );
};

export default Filters;
