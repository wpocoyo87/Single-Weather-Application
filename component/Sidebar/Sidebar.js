"use client";

import React, { useState, useEffect } from "react";
import Location from "./Location";

const Sidebar = ({
  display,
  changeDisplay,
  lat,
  long,
  initialDateString,
  locationName,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date(initialDateString));

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentDate(new Date());
  };

  const typeHandler = (type) => {
    console.log("Selected data type:", type);
    changeDisplay(type);
  };

  return (
    <div className="sidebar-container">
      <div>
        <h2 className="location">Location: {locationName}</h2>
        <Location lat={lat} long={long} />
      </div>
      <div className="date">{currentDate.toLocaleString()}</div>
      <div className="container">
        <h1
          className={display === "temperature" ? "active" : ""}
          onClick={() => typeHandler("temperature")}
        >
          Temperature
        </h1>
        <h1
          className={display === "precipitation" ? "active" : ""}
          onClick={() => typeHandler("precipitation")}
        >
          Precipitation
        </h1>
        <h1
          className={display === "wind_speed" ? "active" : ""}
          onClick={() => typeHandler("wind_speed")}
        >
          Wind Speed
        </h1>
      </div>
      <style jsx>{`
        .sidebar-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          margin-bottom: 20px; /* Added some margin between date and sidebar */
        }

        .location {
          color: yellow;
        }

        .date {
          color: white;
          font-family: san-serif;
          font-size: 1em;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 5px rgba(255, 255, 0, 255);
          margin-bottom: 30px;
        }

        h2 {
          font-size: 1.2em;
          font-weight: bold;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          background: White;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          border-radius: 20px;
          margin-left: auto;
        }

        h1 {
          padding: 20px 5px;
          display: block;
          width: 100%;
          border-radius: 50px;
        }

        h1.active {
          border: Maroon 3px solid;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        h1:hover {
          background: lightgray;
          color: black;
          cursor: pointer;
        }

        h1:active {
          color: blue;
        }

        .container::after {
          content: "";
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
