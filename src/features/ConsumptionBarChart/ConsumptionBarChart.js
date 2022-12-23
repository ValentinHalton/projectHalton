import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import "./ConsumptionBarChart.css";
import { useSelector } from "react-redux";
ChartJS.register(...registerables);

const selectShareData = (state) => state.HoodShareData.hoodshare;

export function BarChartConsu() {
  const hoodshare = useSelector(selectShareData);
  const HoodShareValue = hoodshare.map((item, index) => {
    return item.value;
  });
  const HoodShareLabel = hoodshare.map((item, index) => {
    return item.key;
  });
  const data = {
    labels: HoodShareLabel,
    datasets: [
      {
        label: "Consumption",
        data: HoodShareValue,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    indexAxis: "y",
    scales: {
      y: {
        ticks: {},
      },
        
    },
  };
  return <Bar options={options} data={data} />;
}
