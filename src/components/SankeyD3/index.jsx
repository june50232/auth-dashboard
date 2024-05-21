import React, { useState, useRef, useEffect } from "react"
import Papa from "papaparse";

import SankeyFun from './sankeyFun'
import fakeDataCSV from "./fakeDataCsv.csv";

export default function SankeyD3() {
  const [sankeyData, setSankeyData] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
    Papa.parse(fakeDataCSV, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        console.log({results})
        setSankeyData(results.data);
      }
    });
  }, [])

  useEffect(() => {
    if (sankeyData.length > 0) {
    SankeyFun(
      { links: sankeyData, svgRef },
      {
        height: 1000,
        width: 2000,
        nodeGroup: (d) => d.id.split(/\W/)[0] // take first word for color
      }
    );
    }
  }, [sankeyData]);

  return (
    <div className="sankey-chart">
      <svg ref={svgRef} />
    </div>
  )
}
