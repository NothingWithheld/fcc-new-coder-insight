import React from "react";
import { filterDataFunc } from "../utils";
import Filters from "../Filters";

const Page = ({ rowData, allAvgData }) => {
  return (
    <Filters
      rowData={rowData}
      allAvgData={allAvgData}
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
  );
};

export default Page;
