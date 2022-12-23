import React, { Component } from 'react'
import { DoughnutChart } from "./features/DoughnutChart/DougnhutChart";
import { LineChart } from "./features/LineChart/LineChart";
import { BarChartConsu } from "./features/ConsumptionBarChart/ConsumptionBarChart";
import { BarChartSaving } from "./features/SavingBarChart/SavingBarChart";
import ShareTab from "./features/ShareTabCard/ShareTabCard";
import SavingTab from "./features/SavingTabCard/SavingTabCard";
import Total from "./features/TotalConsumptionCard/TotalConsumptionCard";
import "./App.css";
import AverageSavings from "./features/AverageSavingsCard/AverageSavingsCard";
import HealthIndicator from "./features/HealthIndicatorCard/HealthIndicatorCard";
import HeatMapChart from "./features/HeatMapChart/HeatMapChart";
import Test from "./features/LineChart/LineChartTest";
import Users from "./features/TotalConsumptionCard/Users";
import Meteo from "./features/TotalConsumptionCard/Meteos";
import Post from "./features/TotalConsumptionCard/Post";

function Marvel() {
  return (
   
    <div>
      {/* first container */}
      <Post/>

      <div className="container">
        <div className="wrapper_Total">
          {/* <Total />       */}      
       <Meteo/>

        </div>
        <div className="wrapper_AverageSavings">
          <AverageSavings />
        </div>
        <div className="wrapper_HealthIndicator">
          <HealthIndicator />
        </div>
      </div>

      {/* second container */}

      <div className="container">
        <div className="wrapper_DoughnutChart">
          <DoughnutChart />
        </div>
        <div className="wrapper_ShareTab">
          <ShareTab />
        </div>
      </div>

      {/* third container */}

      <div className="container">
        <div className="container_barChart">
          <div className="wrapper_BarChartSaving">
            <BarChartSaving />
          </div>

          <div className="wrapper_BarChartConsu">
            <BarChartConsu />
          </div>
        </div>
        <div className="wrapper_SavingTab">
          <SavingTab />
        </div>
      </div>

      {/* fourth container */}

      <div className="container">
        <div className="LineChart">
          <LineChart />
        </div>
      </div>
      <div className="container">
      <div className="wrapper_HeatMap">
        <HeatMapChart/>
        </div>
      </div>
     <Test/>
    </div>
  );
}

export default Marvel;
