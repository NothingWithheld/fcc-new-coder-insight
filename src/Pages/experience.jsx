import React from "react";
import { filterDataFunc } from "../utils";
import Filters from "../Filters";
import Typography from "@material-ui/core/Typography";

const Page = ({ rowData, allAvgData }) => {
  return (
    <>
      <Typography variant="h5">Experience Learning/Programming</Typography>
      <Filters
        rowData={rowData}
        avgData={[allAvgData, [49422.38, 753]]}
        lowestResultCombo={[
          false,
          false,
          true,
          false,
          true,
          false,
          false,
          false,
        ]}
        filterFuncDetails={[
          [
            "Hours Spent Learning a Week < 10",
            filterDataFunc("HoursLearning", (val) => parseFloat(val) < 10),
          ],
          [
            "10 <= Hours Spent Learning a Week < 20",
            filterDataFunc(
              "HoursLearning",
              (val) => parseFloat(val) >= 10 && parseFloat(val) < 20
            ),
          ],
          [
            "20 <= Hours Spent Learning a Week < 40",
            filterDataFunc(
              "HoursLearning",
              (val) => parseFloat(val) >= 20 && parseFloat(val) < 40
            ),
          ],
          [
            "Hours Spent Learning a Week >= 40",
            filterDataFunc("HoursLearning", (val) => parseFloat(val) > 40),
          ],
          [
            "Months Programming < 6",
            filterDataFunc("MonthsProgramming", (val) => parseFloat(val) < 6),
          ],
          [
            "6 <= Months Programming < 12",
            filterDataFunc(
              "MonthsProgramming",
              (val) => parseFloat(val) >= 6 && parseFloat(val) < 12
            ),
          ],
          [
            "12 <= Months Programming < 24",
            filterDataFunc(
              "MonthsProgramming",
              (val) => parseFloat(val) >= 12 && parseFloat(val) < 24
            ),
          ],
          [
            "Months Programming >= 24",
            filterDataFunc("MonthsProgramming", (val) => parseFloat(val) >= 24),
          ],
        ]}
      />
    </>
  );
};

export default Page;
