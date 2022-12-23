import React from "react";
import './HealthIndicatorCard.css'

var CriticalAlarms = 2;
const Alarm = CriticalAlarms;

var Warnings = 5;
const AllWarning = Warnings;

var Resolved = 126;
const totalResolved = Resolved;

export default function HealthIndicatorUV() {
  return (
    <div>
      <h1>Health Indicator</h1>

      <p className="alarm">{Alarm}  CriticalAlarms</p>
      <p className="warning">{AllWarning} Warnings</p>
      <p className="resolve">{totalResolved} Resolved</p>
    </div>
  );
}