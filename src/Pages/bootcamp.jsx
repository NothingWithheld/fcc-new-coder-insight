import React from "react";
import { filterDataFunc } from "../utils";
import Filters from "../Filters";
import Typography from "@material-ui/core/Typography";

const Page = ({ rowData, allAvgData }) => {
  return (
    <>
      <Typography variant="h5">Bootcamp</Typography>
      <Filters
        rowData={rowData}
        avgData={[allAvgData, [47277.78, 18]]}
        lowestResultCombo={[true, false, false, true, false, true, false, true]}
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
    </>
  );
};

export default Page;
