"use client";

import React, { useState } from "react";

export const fetchWeatherData = async (lat, long) => {
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,precipitation,wind_speed_10m&hourly=temperature_2m,precipitation,wind_speed_10m&forecast_days=1`
  );
  return data.json();
};

const UserInput = ({ showCurrentData, hourly, handleCoordinatesUpdate }) => {
  const [lat, setLat] = useState("0");
  const [long, setLong] = useState("0");

  const onClickHandler = () => {
    fetchWeatherData(lat, long)
      .then((data) => {
        console.log("onClickHandler", data);
        if (data.current) {
          showCurrentData({
            temperature: data.current.temperature_2m,
            precipitation: data.current.precipitation,
            wind_speed: data.current.wind_speed_10m,
          });
        } else {
          console.error("Current data not found in API response");
        }
        hourly(data.hourly);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const handleLatChange = (e) => {
    setLat(e.target.value);
    handleCoordinatesUpdate(e.target.value, long);
  };

  const handleLongChange = (e) => {
    setLong(e.target.value);
    handleCoordinatesUpdate(lat, e.target.value);
  };
  return (
    <div className={"user-input"}>
      <label>
        <span>Latitude</span>
        <input
          type={"text"}
          placeholder={"Latitude"}
          value={lat}
          onChange={handleLatChange}
        />
      </label>

      <label>
        <span>Longitude</span>
        <input
          type={"text"}
          placeholder={"Longitude"}
          value={long}
          onChange={handleLongChange}
        />
      </label>

      <button onClick={onClickHandler}>Submit</button>

      <style jsx>{`
        .user-input {
          display: flex;
          flex-direction: row;
          width: 50%;
          gap: 10px;
        }

        label {
          display: flex;
          flex-direction: row;
          padding: 15px;
          justify-content: center;
          flex: 1 1;
          border: none;
          box-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          padding: 15px;
          color: white;
        }

        input {
          display: flex;
          flex: 1 1;
          font-size: 1.15em;
          padding: 15px;
          border: none;
          border-bottom: lightgray 5px solid;
          border-radius: 70px;
          width: 15vw;
        }

        button {
          background-color: Lightgrey;
          width: 150px;
          flex: 1 1;
          color: black;
          font-size: 1.15em;
          border: none;
          border-radius: 30px;
          padding: 15px;
          margin-left: 20px;
          border-bottom: White 5px solid;
        }

        button:hover {
          background: yellow;
          cursor: pointer;
        }

        button:active {
          background-color: lightgray;
        }
      `}</style>
    </div>
  );
};

export default UserInput;
