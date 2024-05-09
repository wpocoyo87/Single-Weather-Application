"use client"

import React, {useState} from 'react';

const UserInput = ({changeTemperature}) => {
    const [lat, setLat] = useState("0")

    const fetchTemperatureData = async () => {
       const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}3.05152&longitude=101.5616&hourly=temperature_2m,precipitation,wind_speed_10m&timezone=auto`)
       console.log(data)

       return data.json()

    }

    const onClickHandler = () => {
        console.log(lat)
        fetchTemperatureData().then(jsonData => {
            console.log("onClickHandler",jsonData)
            current(jsonData.current.temperature_2m);
            hourly(jsonData.hourly.temperature_2m);
        });
    };
           
    return (
        <div>
            <label>
                <span>Latitude</span>
                <input type={"text"} placeholder={"latitude"} value={lat} onChange={e => setLat(e.target.value)} />
            </label>

            <label>
                <span>Longitude</span>
                <input type={"text"} placeholder={"Longitude"} />
            </label>

            <button onClick={onClickHandler}>Submit</button>

            <style jsx>{`
    .user-input {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 20px;
        padding: 
    }
    
    label {
        display: flex;
        flex-direction: row;
        width: 500px; 
        padding: 10px; 
        justify-content: center;
    }

    span {
        display: flex;
        flex: 1 1;
    }

    input {
        display: flex;
        flex: 5 5;
        font-size: 1.15em;
        padding: 10px;
        background: white;
        border:none;
        border-bottom; grey 1px solid;

    }

    button {
        background-color: white;
        color: black;
        width: 200px;
        font-size: 1.15em;
        border : none;
    }

    button:active{
        background-color: lightgray;

    }
`}</style>
          
        </div>
    );
};

export default UserInput;