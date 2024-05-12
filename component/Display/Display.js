"use client";
import React from "react";
import moment from "moment-timezone";

const Display = ({ showCurrentData, hourly, unit, selectedDataType }) => {
  const renderCurrentData = () => {
    if (showCurrentData === "Waiting...") {
      return (
        <div className="current-data">
          <div className="waiting-text">Waiting...</div>
        </div>
      );
    }

    let currentData;
    switch (selectedDataType) {
      case "temperature":
        currentData = `${showCurrentData.temperature} ${unit}`;
        break;
      case "precipitation":
        currentData = `${showCurrentData.precipitation} ${unit}`;
        break;
      case "wind_speed":
        currentData = `${showCurrentData.wind_speed} ${unit}`;
        break;
      default:
        currentData = null;
    }
    return <div className="current-data">{currentData}</div>;
  };

  // Rendering function for hourly data
  const renderHourlyData = () => {
    // Check if hourly data is available
    if (!hourly || !hourly.temperature_2m) return null;

    // Render hourly data based on selected data type
    let hourlyData;
    switch (selectedDataType) {
      case "temperature":
        hourlyData = hourly.temperature_2m.map((temp, index) => (
          <p key={index}>
            {/* Display the time and temperature with 5cm space in between */}
            {moment(hourly.time[index]).format("HH:mm")}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {temp} {unit}
          </p>
        ));
        break;
      case "precipitation":
        hourlyData = hourly.precipitation.map((precip, index) => (
          <p key={index}>
            {/* Display the time and precipitation with 5cm space in between */}
            {moment(hourly.time[index]).format("HH:mm")}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {precip} {unit}
          </p>
        ));
        break;
      case "wind_speed":
        hourlyData = hourly.wind_speed_10m.map((speed, index) => (
          <p key={index}>
            {/* Display the time and wind speed with 5cm space in between */}
            {moment(hourly.time[index]).format("HH:mm")}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {speed} {unit}
          </p>
        ));
        break;
      default:
        hourlyData = null;
    }
    return <div className="hourly-data">{hourlyData}</div>;
  };

  return (
    <div className={"display-container"}>
      <div className="current-data">{renderCurrentData()}</div>
      <div>{renderHourlyData()}</div>
      <style jsx>{`
        .display-container {
          display: flex;
          padding: 15px;
          margin: 3px;
          width: 60%;
          color: white;
          flex-direction: column;
          align-items: center;
        }

        .current-data {
          margin-top: 20px;
          margin-bottom: 20px;
          border-bottom: 20px solid transparent;
          font-size: 3.15em;
          color: yellow;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Display;
