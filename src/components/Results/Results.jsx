import React from 'react'
import "./results.css"

export default function Results() {
    return (
        <div className="Results">
        <div className="results-info">
            <p>IP ADDRESS</p>
            <p className="results-data">192.212.174.101</p>
        </div>
        <div className="results-info">
            <p>LOCATION</p>
            <p className="results-data">Brooklyn, NY 10001</p>
        </div>
        <div className="results-info">
            <p>TIMEZONE</p>
            <p className="results-data">UTC -05:00</p>
        </div>
        <div className="results-info">
            <p>ISP</p>
            <p className="results-data">SpaceX Starlink</p>
        </div>
        </div>
    )
}
