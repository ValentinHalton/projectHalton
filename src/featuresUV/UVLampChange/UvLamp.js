import React from "react";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

const selectUvData = (state) => state.HoodUvData.UvData;

export default function UvTab() {
    const UvData = useSelector(selectUvData);
    const UvDateChange = UvData.map((item, index) => {
      return <p>{item.dateChange}</p>;
  });
  const UvDaysRemaining = UvData.map((item, index) => {
    return <p>{item.daysRemaining} days</p>;
  });
 

  return (
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">UV Lamps change calendar </th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <td>{UvDateChange}</td>
            <td>{UvDaysRemaining}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
