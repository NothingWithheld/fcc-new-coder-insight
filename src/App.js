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
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const SpacedTypography = withStyles({ root: { margin: "8px 0" } })(Typography);

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

  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {!loading && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            maxWidth="1200px"
          >
            <Box
              display="flex"
              flexDirection="column"
              textAlign="left"
              maxWidth="800px"
              margin="30px auto"
            >
              <SpacedTypography>
                This is a freeform exploration of freeCodeCamp's{" "}
                <Link
                  href="https://www.freecodecamp.org/news/take-the-2017-new-coder-survey-and-help-us-build-a-massive-public-dataset-8c808cbee7eb/"
                  target="_blank"
                  rel="noopener"
                >
                  2017 New Coder Survey
                </Link>
                <span>&#8212;</span> "an anonymous survey of thousands of people
                who started coding less than 5 years ago." The survey is open
                for anyone to take. All of the questions are optional.
              </SpacedTypography>
              <SpacedTypography>
                We will explore how certain criteria affect a person's response
                to "About how much money do you expect to earn per year at your
                first developer job, in US dollars?"
              </SpacedTypography>
              <SpacedTypography>
                Each selected criteria will limit the responses to only those
                with answers for the criteria question (all questions are
                optional). You can select and analyze the results from multiple
                criteria and choose to "and" or "or" the criteria responses.
              </SpacedTypography>
              <SpacedTypography>
                Click "ADD SELECTION" to generate the response to the selection
                criteria. Hover over the bars in the bar chart to view a tooltip
                that displays the average expected earnings and the number of
                survey responders who fit the criteria.
              </SpacedTypography>
              <Box>
                <SpacedTypography display="inline">
                  Click either the bar in the bar chart or the "chip"{" "}
                </SpacedTypography>
                <Chip label="chip" />
                <Typography display="inline">
                  {" "}
                  that corresponds to a selection to view the critera you
                  selected. Click the "Current Selection" chip to go back to
                  making a new selection. Certain selections are deletable via
                  the "chip"{" "}
                </Typography>
                <Chip label="chip" onDelete={() => null} />
              </Box>
              <SpacedTypography>
                Each scene has different criteria. Navigate between scenes via
                the "PREV" and "NEXT" buttons to the upper right of the bar
                chart.
              </SpacedTypography>
              <SpacedTypography>
                The first selection of every scene is the average of all
                responses. The second selection of every scene, except the
                everything scene (computation time is too long), is the
                selection that results in the lowest non-zero average. Have fun
                finding the selection with the highest average!
              </SpacedTypography>
            </Box>
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
          <Box
            width="100%"
            height="100px"
            bgcolor="#e0e0e0"
            marginTop="300px"
          />
        </>
      )}
    </Box>
  );
}

export default App;
