import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import csv from "jquery-csv";
import { calcAvgEarnings } from "./utils";
import FirstSlide from "./Pages/first";

function App() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("with_earnings.csv")
      .then((response) => response.text())
      .then((data) => {
        setRowData(csv.toObjects(data));
        setLoading(false);
      });
  }, []);
  console.log(rowData);
  console.log(calcAvgEarnings(rowData));

  return (
    <div className="App">
      <FirstSlide rowData={rowData} allAvg={calcAvgEarnings(rowData)} />
    </div>
  );
}

export default App;
