import React from "react";
import "./header.css";
import arrowLogo from "../../../images/icon-arrow.svg";

export default function Header() {
  return (
    <div className="Header">
      <form action="">
        <h1>IP Address Tracker</h1>
        <div className="search-section">
          <input id="input-search" type="text" placeholder="Search for any IP address or domain."/>
          <button id="btn-search" type="submit">
            <img src={arrowLogo}></img>
          </button>
        </div>
      </form>
    </div>
  );
}
