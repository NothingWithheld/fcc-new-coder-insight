import React from "react";
import { filterDataFunc } from "../utils";
import Filters from "../Filters";
import Typography from "@material-ui/core/Typography";

const Page = ({ rowData, allAvgData }) => {
  return (
    <>
      <Typography variant="h5">Age/Gender/Diversity</Typography>
      <Filters
        rowData={rowData}
        avgData={[allAvgData, [36873.59, 17]]}
        lowestResultCombo={[
          true,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          true,
        ]}
        filterFuncDetails={[
          ["Age < 18", filterDataFunc("Age", (val) => parseFloat(val) < 18)],
          [
            "18 <= Age < 23",
            filterDataFunc(
              "Age",
              (val) => parseFloat(val) >= 18 && parseFloat(val) < 23
            ),
          ],
          [
            "Age <= 23 < 30",
            filterDataFunc(
              "Age",
              (val) => parseFloat(val) >= 23 && parseFloat(val) < 30
            ),
          ],
          ["Age >= 30", filterDataFunc("Age", (val) => parseFloat(val) >= 30)],
          ["Female", filterDataFunc("Gender", (val) => val === "female")],
          ["Male", filterDataFunc("Gender", (val) => val === "male")],
          [
            "Non-binary Gender",
            filterDataFunc("GenderOther", (val) => val !== ""),
          ],
          [
            "Ethnic Minority",
            filterDataFunc("IsEthnicMinority", (val) => parseFloat(val) === 1),
          ],
          [
            "Not Ethnic Minority",
            filterDataFunc("IsEthnicMinority", (val) => parseFloat(val) === 0),
          ],
        ]}
      />
    </>
  );
};

export default Page;
