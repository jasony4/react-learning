import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataValues = props.data.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.data.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
