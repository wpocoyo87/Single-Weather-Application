"use client"

import React, {useState} from 'react';


const UserInput = ({current, hourly}) => {
    const [lat, setLat] = useState("0");
    const [long, setLong] = useState("0"); // Step 1: State variable for longitude

    const fetchWeatherData = async () => {
                                                                                                    // Step 3: Include longitude in API request URL
        const data =  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,precipitation,wind_speed_10m&hourly=temperature_2m,precipitation,wind_speed_10m&forecast_days=1`)
        return data.json()
    }


    const onClickHandler = () => {
        fetchWeatherData().then(data => {
            console.log("onClickHandler", data);
            current(data.current.temperature_2m);
            hourly(data.hourly);
        });
       
    }
    return (
        <div className={"user-input"}>
            <label>
                <span>Latitude</span>
                <input type={"text"} placeholder={"Latitude"} value={lat} onChange={e => setLat(e.target.value)}/>
            </label>

            <label>
                <span>Longitude</span>                                 {/* Step 2: Update longitude state */}
                <input type={"text"} placeholder={"Longitude"} value={long} onChange={e => setLong(e.target.value)} /> 
            </label>


            <button onClick={onClickHandler}>Submit</button>
            <style jsx>{`
                .user-input {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    gap: 20px;
                }


                label {
                    display: flex;
                    flex-direction: row;
                    padding: 10px;
                    justify-content: center;
                    flex: 2 2;
                }

                span {
                    display: flex;
                    align-items: center;
                    flex: 1 1;
                }

                input {
                    display: flex;
                    flex: 5 5;
                    font-size: 1.15em;
                    padding: 10px;
                    border: none;
                    border-bottom: grey 1px solid;
                }


                button {
                    background-color: white;
                    width: 200px;
                    flex: 1 1;
                    color: black;
                    font-size: 1.15em;
                    border: none;
                }

                button:active {
                    background-color: lightgray;
                }

            `}</style>
        </div>
    );
};

export default UserInput;