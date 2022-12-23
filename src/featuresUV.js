import React, { Component } from 'react'
import { BarChart } from './featuresUV/BarChart/BarChart';
import HealthIndicatorUV from './featuresUV/HealthIndicatorCard/HealthIndicatorCard';
import AverageSavingsUV from './featuresUV/TotalConsumptionCardUV/AverageSavingsCardUV/AverageSavingsCardUV';


import TotalUV from './featuresUV/TotalConsumptionCardUV/TotalConsumptionCardUV';
import UvTab from './featuresUV/UVLampChange/UvLamp';

function UV() {
  return (
   
    <div>
      {/* first container */}
    

      <div className="container">
        <div className="wrapper_Total">
          {/* <Total />       */}      
       <TotalUV/>

        </div>
        <div className="wrapper_AverageSavings">
          <AverageSavingsUV/>
        </div>
        <div className="wrapper_HealthIndicator">
          <HealthIndicatorUV/>
        </div>
        
      </div>

     

     

      {/* second container */}

      <div className="container">
        <div className="container_barChart">
          <div className="wrapper_BarChartSaving">
            <BarChart/>
          </div>
          <div className="wrapper_ShareTab">
          <UvTab/>
        </div>
          {/* <div className="wrapper_BarChartConsu">
            
          </div> */}
        </div>
        {/* <div className="wrapper_SavingTab">
         
        </div> */}
      </div>

      {/* fourth container */}

      <div className="container">
        <div className="LineChart">
          
        </div>
      </div>
      <div className="container">
      <div className="wrapper_HeatMap">
        
        </div>
      </div>
     
    </div>
  );
}

export default UV;
