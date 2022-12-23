import React from "react";
//import * as zoom from "chartjs-plugin-zoom";
import { Line } from "react-chartjs-2";
import * as brush from "chartjs-plugin-brush";
let res = [
  { date: "2013-04-28", value: 135.98 },
  { date: "2013-04-29", value: 147.49 },
  { date: "2013-04-30", value: 146.93 },
  { date: "2013-05-01", value: 139.89 },
  { date: "2013-05-02", value: 125.6 },
  { date: "2013-05-03", value: 108.13 },
  { date: "2013-05-04", value: 115 },
  { date: "2013-05-05", value: 118.8 },
  { date: "2013-05-06", value: 124.66 },
  { date: "2013-05-07", value: 113.44 },
  { date: "2013-05-08", value: 115.78 },
  { date: "2014-05-09", value: 113.46 },
  { date: "2014-05-10", value: 122 },
  { date: "2014-05-11", value: 118.68 },
  { date: "2014-05-12", value: 117.45 },
  { date: "2014-05-13", value: 118.7 },
  { date: "2014-05-14", value: 119.8 },
  { date: "2014-05-15", value: 115.81 },
  { date: "2014-05-16", value: 118.76 },
  { date: "2014-05-17", value: 125.3 },
  { date: "2013-05-11", value: 118.68 },
  { date: "2013-05-12", value: 117.45 },
  { date: "2013-05-13", value: 118.7 },
  { date: "2013-05-14", value: 119.8 },
  { date: "2013-05-15", value: 115.81 },
  { date: "2013-05-16", value: 118.76 },
  { date: "2013-05-17", value: 125.3 },
  { date: "2013-05-18", value: 125.25 },
  { date: "2013-05-19", value: 124.5 }
];
const data = {
  labels: res.map((e) => e.date),
  datasets: [
    {
      label: "First dataset",
      data: res.map((e) => e.value),
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

const options = {
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        stacked: true
      }
    ]
  },
  pan: {
    enabled: true,
    mode: "y"
  },
  zoom: {
    enabled: true,
    mode: "x",
    sensitivity: 0.5
  }
};

export default function Test() {
  return (
    <div className="App">
      <Line data={data} options={options} />
    </div>
  );
}
