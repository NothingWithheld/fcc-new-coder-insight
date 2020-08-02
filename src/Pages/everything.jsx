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
        ["Has Debt", filterDataFunc("HasDebt", (val) => parseFloat(val) === 1)],
        ["No Debt", filterDataFunc("HasDebt", (val) => parseFloat(val) === 0)],
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
          filterDataFunc("HasHighSpdInternet", (val) => parseFloat(val) === 1),
        ],
        [
          "No High Speed Internet at Home",
          filterDataFunc("HasHighSpdInternet", (val) => parseFloat(val) === 0),
        ],
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
