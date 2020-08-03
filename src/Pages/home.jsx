import React from "react";
import { filterDataFunc } from "../utils";
import Filters from "../Filters";
import Typography from "@material-ui/core/Typography";

const Page = ({ rowData, allAvgData }) => {
  return (
    <>
      <Typography variant="h5">Geography/Home Information</Typography>
      <Filters
        rowData={rowData}
        avgData={[allAvgData, [27907.2, 5]]}
        lowestResultCombo={[
          false,
          true,
          false,
          true,
          false,
          true,
          true,
          false,
          true,
          false,
          false,
          true,
        ]}
        filterFuncDetails={[
          [
            "US Citizen",
            filterDataFunc(
              "CountryCitizen",
              (val) => val === "United States of America"
            ),
          ],
          [
            "Not US Citizen",
            filterDataFunc(
              "CountryCitizen",
              (val) => val !== "United States of America"
            ),
          ],
          [
            "Lives in US",
            filterDataFunc(
              "CountryLive",
              (val) => val === "United States of America"
            ),
          ],
          [
            "Doesn't Live in US",
            filterDataFunc(
              "CountryLive",
              (val) => val !== "United States of America"
            ),
          ],
          [
            "Willing to Relocate",
            filterDataFunc("JobRelocateYesNo", (val) => parseFloat(val) === 1),
          ],
          [
            "Not Willing to Relocate",
            filterDataFunc("JobRelocateYesNo", (val) => parseFloat(val) === 0),
          ],
          [
            "Has Children",
            filterDataFunc("HasChildren", (val) => parseFloat(val) === 1),
          ],
          [
            "No Children",
            filterDataFunc("HasChildren", (val) => parseFloat(val) === 0),
          ],
          [
            "Has Financial Dependents",
            filterDataFunc(
              "HasFinancialDependents",
              (val) => parseFloat(val) === 1
            ),
          ],
          [
            "No Financial Dependents",
            filterDataFunc(
              "HasFinancialDependents",
              (val) => parseFloat(val) === 0
            ),
          ],
          [
            "Has High Speed Internet at Home",
            filterDataFunc(
              "HasHighSpdInternet",
              (val) => parseFloat(val) === 1
            ),
          ],
          [
            "No High Speed Internet at Home",
            filterDataFunc(
              "HasHighSpdInternet",
              (val) => parseFloat(val) === 0
            ),
          ],
        ]}
      />
    </>
  );
};

export default Page;
