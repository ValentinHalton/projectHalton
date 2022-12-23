import React from "react";
import './AverageSavingsCard.css'

export default function AverageSavings() {
  var Saving = 38;
  const totalSavings = Saving;

  return <h1>Average Savings <p className="average_savings">{totalSavings}%</p></h1>;
}
