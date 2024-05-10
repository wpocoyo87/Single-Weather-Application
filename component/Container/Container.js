"use client"

import React, {useState} from 'react';
import UserInput from "@/component/UserInput/UserInput";
import Display from "@/component/Display/Display";
import Sidebar from "@/component/Sidebar/Sidebar";

const Container = () => {
    const [currentTemperature, setCurrentTemperature] = useState("Waiting..."); // Initialize temperature state as "Waiting..."
    const [hourlyTemperature, setHourlyTemperature] = useState([]);
    const [selectedDataType, setSelectedDataType] = useState("temperature");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    // Function to handle latitude and longitude updates
    const handleCoordinatesUpdate = (lat, long) => {
        setLatitude(lat);
        setLongitude(long);

        if (lat === 0 && long === 0) {
            setCurrentTemperature("Waiting..."); // Set temperature to "Waiting..." when latitude and longitude are not searched
        } else {
            // Fetch temperature data based on latitude and longitude
            // Example: fetchData(lat, long);
        }
    };
    return (
        <div className={"container"}>
            <div className={"container-sidebar"}>
                <Sidebar changeDisplay={setSelectedDataType} display={selectedDataType}></Sidebar>
            </div>
            <div className={"container-spa"}>
                <UserInput current={setCurrentTemperature} hourly={setHourlyTemperature}></UserInput>
                <Display
                    current={currentTemperature}
                    hourly={hourlyTemperature}
                    unit={
                        selectedDataType === "temperature" ? "°C" :
                        selectedDataType === "precipitation" ? "mm" :
                        selectedDataType === "wind_speed" ? "km/h" : ""
                    } selectedDataType={selectedDataType}/>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: row;
                    width: 100vw;
                    height: 100vh;
                }
                
                .container-sidebar {
                    display: flex;
                    flex: 1 1;
                }
                
                
                .container-spa {
                    flex: 5 5;
                    display: flex;
                    flex-direction: column;

                    padding: 30px;
                }
            `}</style>
        </div>
    );
};

export default Container;