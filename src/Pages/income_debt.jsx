import React from "react";
import { filterDataFunc } from "../utils";
import Filters from "../Filters";
import Typography from "@material-ui/core/Typography";

const Page = ({ rowData, allAvgData }) => {
  return (
    <>
      <Typography variant="h5">Income/Debt</Typography>
      <Filters
        rowData={rowData}
        allAvgData={allAvgData}
        filterFuncDetails={[
          [
            "Has Debt",
            filterDataFunc("HasDebt", (val) => parseFloat(val) === 1),
          ],
          [
            "No Debt",
            filterDataFunc("HasDebt", (val) => parseFloat(val) === 0),
          ],
          [
            "Has Student Debt",
            filterDataFunc("HasStudentDebt", (val) => parseFloat(val) === 1),
          ],
          [
            "No Student Debt",
            filterDataFunc("HasStudentDebt", (val) => parseFloat(val) === 0),
          ],
          [
            "2016 Income < 40,000",
            filterDataFunc("Income", (val) => parseFloat(val) < 40000),
          ],
          [
            "40,000 <= 2016 Income < 60,000",
            filterDataFunc(
              "Income",
              (val) => parseFloat(val) >= 40000 && parseFloat(val) < 60000
            ),
          ],
          [
            "60,000 <= 2016 Income < 100,000",
            filterDataFunc(
              "Income",
              (val) => parseFloat(val) >= 60000 && parseFloat(val) < 100000
            ),
          ],
          [
            "2016 Income >= 100,000",
            filterDataFunc("Income", (val) => parseFloat(val) >= 100000),
          ],
        ]}
      />
    </>
  );
};

export default Page;
