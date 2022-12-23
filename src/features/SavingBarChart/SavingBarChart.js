import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import "./SavingBarChart.css";
import { useSelector } from "react-redux";

ChartJS.register(...registerables);
const selectSavingsData = (state) => state.HoodSavingsData.hoodsaving;


export function BarChartSaving() {
  const hoodsaving = useSelector(selectSavingsData);
  const HoodSavingValue = hoodsaving.map((item, index) => {
    return item.value;
  });
  const HoodSavingLabel = hoodsaving.map((item, index) => {
    return item.key;
  });
  const data = {
    labels: HoodSavingLabel,
    datasets: [
      {
        label: "Savings",
        data: HoodSavingValue,
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };

  data.datasets[0].data.map((currentValue, index, array) => {
    return (array[index] = currentValue * -1);
  });
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y",
    scales: {
      y: {
        ticks: {
          display: false,
        },
      },
    },
  };
  return <Bar options={options} data={data} />;
}
