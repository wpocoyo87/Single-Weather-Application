"use client";

export const fetchLocationData = async (lat, long) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&zoom=18&addressdetails=1&accept-language=en`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }
    const data = await response.json();
    console.log("Location data:", data);
    if (!data.display_name) {
      throw new Error("Location data not found");
    }
    return data.display_name;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};

import React, { useState, useEffect } from "react";

const Location = ({ lat, long }) => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (
          lat === null ||
          long === null ||
          lat.trim() === "" ||
          long.trim() === ""
        ) {
          throw new Error("Latitude and longitude cannot be blank");
        }

        const locationData = await fetchLocationData(lat, long);
        setLocation(locationData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (
      lat !== undefined &&
      long !== undefined &&
      lat.trim() !== "" &&
      long.trim() !== ""
    ) {
      fetchData();
    }
  }, [lat, long]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && <p>Location: {location}</p>}
      {!loading && !error && !location && <p>No location data available</p>}
    </div>
  );
};

export default Location;
