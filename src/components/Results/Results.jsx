import React from "react";
import "./results.css";

export default function Results({ ip, location, timezone, isp }) {
  return (
    <div className="Results">
      <div className="results-info">
        <p>IP ADDRESS</p>
        <p className="results-data">{ip}</p>
      </div>
      <div className="results-info">
        <p>LOCATION</p>
        <p className="results-data">{location}</p>
      </div>
      <div className="results-info">
        <p>TIMEZONE</p>
        <p className="results-data">{timezone ? `UTC ${timezone}` : ""}</p>
      </div>
      <div className="results-info">
        <p>ISP</p>
        <p className="results-data">{isp}</p>
      </div>
    </div>
  );
}
