import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import csv from "jquery-csv";
import { calcAvgEarnings } from "./utils";

function App() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("with_earnings.csv")
      .then((response) => response.text())
      .then((data) => setRowData(csv.toObjects(data)));
  }, []);
  console.log(rowData);
  console.log(calcAvgEarnings(rowData));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
