"use client"

import React, {useState} from 'react';

const UserInput = ({changeTemperature}) => {
    const [lat, setLat] = useState("0")

    const onClickHandler = () => {
            console.log(lat);
            changeTemperature("0");
        };
           
    return (
        <div>
            <label>
                <span>Latitude</span>
                <input type={"text"} placeholder={"latitude"} value={lat} onChange={e => setLat(e.target.value)} />
            </label>

            <button onClick={onClickHandler}>Submit</button>
        </div>
    );
};

export default UserInput;