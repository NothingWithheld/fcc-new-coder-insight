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
      ]}
    />
  );
};

export default Page;
