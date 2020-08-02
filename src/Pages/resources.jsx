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
          "Found CSS Tricks Helpful",
          filterDataFunc("ResourceCSS", (val) => parseFloat(val) === 1),
        ],
        [
          "Found EdX Helpful",
          filterDataFunc("ResourceEdX", (val) => parseFloat(val) === 1),
        ],
        [
          "Found freeCodeCamp Helpful",
          filterDataFunc("ResourceFCC", (val) => parseFloat(val) === 1),
        ],
        [
          "Found HackerRank Helpful",
          filterDataFunc("ResourceHackerRank", (val) => parseFloat(val) === 1),
        ],
        [
          "Found Lynda.com Helpful",
          filterDataFunc("ResourceLynda", (val) => parseFloat(val) === 1),
        ],
        [
          "Found Stack Overflow Helpful",
          filterDataFunc("ResourceSO", (val) => parseFloat(val) === 1),
        ],
        [
          "Found TreeHouse Helpful",
          filterDataFunc("ResourceTreehouse", (val) => parseFloat(val) === 1),
        ],
        [
          "Found Udacity Helpful",
          filterDataFunc("ResourceUdacity", (val) => parseFloat(val) === 1),
        ],
        [
          "Found Udemy Helpful",
          filterDataFunc("ResourceUdemy", (val) => parseFloat(val) === 1),
        ],
        [
          "Found W3Schools Helpful",
          filterDataFunc("ResourceW3S", (val) => parseFloat(val) === 1),
        ],
      ]}
    />
  );
};

export default Page;