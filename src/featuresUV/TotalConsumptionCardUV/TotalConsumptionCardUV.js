import React from "react";
import './TotalConsumptionCardUV.css'

export default function TotalUV() {
   var TotalConsumption = 1230000;
   const Total = TotalConsumption;
    
  return  <h1>Total Air vol. consumption <p className="total_consumption">{Total}</p></h1>
 ;
}
