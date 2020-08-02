import React from "react";
import { filterDataFunc, orFilterFuncs, andFilterFunc } from "../utils";
import Filters from "../Filters";

const Page = ({ rowData, allAvg }) => {
  return <Filters rowData={rowData} allAvg={allAvg} />;
};

export default Page;
