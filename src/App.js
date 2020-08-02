import React, { useState, useEffect } from "react";
import "./App.css";
import csv from "jquery-csv";
import { calcAvgEarnings } from "./utils";
import BootcampPage from "./Pages/bootcamp";
import BackgroundPage from "./Pages/background";
import ExperiencePage from "./Pages/experience";
import HomePage from "./Pages/home";
import IncomeDebtPage from "./Pages/income_debt";
import ResourcesPage from "./Pages/resources";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import EverythingPage from "./Pages/everything";

const pages = [
  ExperiencePage,
  BackgroundPage,
  IncomeDebtPage,
  HomePage,
  BootcampPage,
  ResourcesPage,
  EverythingPage,
];

function App() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allAvgData, setAllAvgData] = useState(null);
  const [pageInd, setPageInd] = useState(0);

  const Page = pages[pageInd];

  useEffect(() => {
    fetch("with_earnings.csv")
      .then((response) => response.text())
      .then((data) => {
        const parsedData = csv.toObjects(data);
        setRowData(parsedData);
        setAllAvgData([calcAvgEarnings(parsedData), parsedData.length]);
        setLoading(false);
      });
  }, []);
  console.log(rowData);

  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {!loading && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          maxWidth="1200px"
        >
          <Box display="flex" flexDirection="row-reverse" paddingRight="60px">
            <ButtonGroup variant="contained" color="primary">
              <Button
                onClick={() => setPageInd(pageInd - 1)}
                disabled={pageInd === 0}
              >
                Prev
              </Button>
              <Button
                onClick={() => setPageInd(pageInd + 1)}
                disabled={pageInd === pages.length - 1}
              >
                Next
              </Button>
            </ButtonGroup>
          </Box>
          <Page rowData={rowData} allAvgData={allAvgData} />
        </Box>
      )}
    </Box>
  );
}

export default App;
