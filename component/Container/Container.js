"use client";

import React, { useState, useEffect } from "react";
import UserInput, { fetchWeatherData } from "@/component/UserInput/UserInput";
import Display from "@/component/Display/Display";
import Sidebar from "@/component/Sidebar/Sidebar";
import Location, { fetchLocationData } from "@/component/Sidebar/Location";

function Container() {
  const [CurrentCollectedData, setCurrentCollectedData] =
    useState("Waiting..."); // Initialize temperature state as "Waiting..."
  const [HourlyCollectedData, setHourlyCollectedData] = useState([]);
  const [selectedDataType, setSelectedDataType] = useState("temperature");
  const [lat, setLatitude] = useState(0);
  const [long, setLongitude] = useState(0);
  const [locationName, setLocationName] = useState("Waiting...");
  const [currentDate, setCurrentDate] = useState(""); // Initialize current date state

  // Fetch the current date when the component mounts
  useEffect(() => {
    setCurrentDate(new Date().toLocaleString());
  }, []);

  // Function to handle latitude and longitude updates
  const handleCoordinatesUpdate = (lat, long) => {
    setLatitude(lat);
    setLongitude(long);

    fetchLocationData(lat, long)
      .then((location) => {
        setLocationName(location);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
        setLocationName("Failed to fetch location");
      });

    // Call the function to fetch weather data based on latitude and longitude
    if (lat !== 0 && long !== 0 && lat.trim() !== "" && long.trim() !== "") {
      fetchWeatherData(lat, long)
        .then((data) => {
          setCurrentCollectedData(data.current);
          setHourlyCollectedData(data.hourly);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setCurrentCollectedData("Failed to fetch weather data");
        });
    } else {
      setLocationName("Latitude and longitude are required.");
      setCurrentCollectedData("Waiting...");
      setHourlyCollectedData([]);
    }
  };

  return (
    <div className={"container"}>
      <div className={"container-sidebar"}>
        <Sidebar
          changeDisplay={setSelectedDataType}
          display={selectedDataType}
          latitude={lat} // Pass latitude prop
          longitude={long} // Pass longitude prop
          currentDate={currentDate}
          suppressHydrationWarning={true}
          locationName={locationName}
        />
      </div>
      <div className={"container-spa"}>
        <h1 className="title">Current Weather Information</h1>
        <UserInput
          showCurrentData={setCurrentCollectedData}
          hourly={setHourlyCollectedData}
          handleCoordinatesUpdate={handleCoordinatesUpdate}
        />
        <div suppressHydrationWarning={true}>
          {/* Isi dari div yang menyebabkan peringatan */}
        </div>
        <Display
          showCurrentData={CurrentCollectedData}
          hourly={HourlyCollectedData}
          unit={
            selectedDataType === "temperature"
              ? "°C"
              : selectedDataType === "precipitation"
              ? "mm"
              : selectedDataType === "wind_speed"
              ? "km/h"
              : ""
          }
          selectedDataType={selectedDataType}
        />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 60vw;
          min-height: 70vh;
          background-size: cover;
          background-position: center;
        }

        .container-sidebar {
          display: flex;
          flex: 1 1;
        }

        .container-spa {
          flex: 3 3;
          display: flex;
          flex-direction: column;
          font-size: 1.15em;
        }

        .title {
          color: white;
          font-size: 2em;
          margin-bottom: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Container;
