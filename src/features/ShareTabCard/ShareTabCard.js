import React from "react";
import "./ShareTabCard.css";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

const selectShareData = (state) => state.HoodShareData.hoodshare;
const selectCouleur = (state) => state.Colors.color;

export default function ShareTab() {
  const couleur = useSelector(selectCouleur);
  const hoodshare = useSelector(selectShareData);
  const HoodShareLabel = hoodshare.map((item, index) => {
    return <p>{item.key}</p>;
  });
  const HoodShareValue = hoodshare.map((item, index) => {
    return <p>{item.value/5126011.596901774*100} %</p>;
  });
  const ShareColor = couleur.map((item, index) => {
    return (
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill={item.name}
          class="bi bi-circle-fill"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>{" "}
      </p>
    );
  });

  return (
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">System</th>
            <th scope="col"></th>
            <th scope="col">Share</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">{HoodShareLabel} </th>
            <td>{ShareColor}</td>
            <td>{HoodShareValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
