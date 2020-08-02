import React from "react";
import { filterDataFunc } from "../utils";
import Filters from "../Filters";

const Page = ({ rowData, allAvgData }) => {
  return (
    <Filters
      rowData={rowData}
      allAvgData={allAvgData}
      filterFuncDetails={[
        [
          "Attended Bootcamp",
          filterDataFunc("AttendedBootcamp", (val) => parseFloat(val) === 1),
        ],
        [
          "Did not Attend Bootcamp",
          filterDataFunc("AttendedBootcamp", (val) => parseFloat(val) === 0),
        ],
        [
          "Finished Bootcamp",
          filterDataFunc("BootcampFinish", (val) => parseFloat(val) === 1),
        ],
        [
          "Did Not Finish Bootcamp",
          filterDataFunc("BootcampFinish", (val) => parseFloat(val) === 0),
        ],
        [
          "Took a Loan to Attend Bootcamp",
          filterDataFunc("BootcampLoanYesNo", (val) => parseFloat(val) === 1),
        ],
        [
          "Did Not Take a Loan to Attend Bootcamp",
          filterDataFunc("BootcampLoanYesNo", (val) => parseFloat(val) === 0),
        ],
        [
          "Recommends Going to Bootcamp",
          filterDataFunc("BootcampRecommend", (val) => parseFloat(val) === 1),
        ],
        [
          "Does Not Recommend Going to Bootcamp",
          filterDataFunc("BootcampRecommend", (val) => parseFloat(val) === 0),
        ],
      ]}
    />
  );
};

export default Page;
