import React from "react";
import { Chart } from "react-google-charts";

export default function Sankey({data, options}) {
  return (
    <Chart
      chartType="Sankey"
      // width="100%"
      height="200px"
      data={data}
      options={options}
    />
  );
}
