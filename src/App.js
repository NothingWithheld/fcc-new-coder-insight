import React, { useState, useEffect } from "react";
import "./App.css";
import csv from "jquery-csv";
import { calcAvgEarnings } from "./utils";
import FirstSlide from "./Pages/first";

function App() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allAvgData, setAllAvgData] = useState(null);

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
  // console.log(rowData);
  console.log(allAvgData);

  return (
    <div className="App">
      {!loading && <FirstSlide rowData={rowData} allAvgData={allAvgData} />}
    </div>
  );
}

export default App;
