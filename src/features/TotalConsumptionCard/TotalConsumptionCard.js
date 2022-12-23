import React from "react";
import './TotalConsumptionCard.css'
import { useSelector} from "react-redux";
const selectTotalConsumptionData = (state)=>state.TotalConsumptionData.totalConsumption;


export default function Total() {
  const TotalConsumptionData = useSelector(selectTotalConsumptionData);
  // var TotalConsumption = 1230000;
  // const Total = TotalConsumption;

  return  <h1>Total Air vol. consumption <p className="total_consumption">{TotalConsumptionData}</p></h1>
 ;
}
