import React , { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "./LineChart.css";
import { Chart as ChartJS, registerables } from "chart.js";

Chart.register(zoomPlugin);

ChartJS.register(...registerables);

const selectLineData = (state) =>
  state.hourlyDataAirflow.HoodsAirflow[0].airflowArray;

const selectHoodAirflows = (state) => state.hourlyDataAirflow.HoodsAirflow;

const mapHoodAirflowsToDatasets = (airflowsArray) => {
  const result = airflowsArray.map((item, index) => {
    const dataset = {
      label: item.name,
      data: item.airflowArray.map((item, index) => item.value),
      // fill: false,
      // backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    };
    return dataset;
  });

  // const result = [{}];

  return result;
};

export function LineChart() {
  const LineData = useSelector(selectLineData);
  const hoodAirflows = useSelector(selectHoodAirflows);

  const LineDataToShowLabel = LineData.map((item, index) => {
    return item.key;
  });

  const datasets = mapHoodAirflowsToDatasets(hoodAirflows);



  
  


  const data = {
    labels: LineDataToShowLabel,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    pointRadius: 0,
    animation: false,
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Line data={data} options={options}  />
    </React.Fragment>
  );
}
