"use client"

import React from 'react';

const Sidebar = ({display, changeDisplay}) => {
    const typeHandler = (type) => {
        console.log("Selected data type:",type);
        changeDisplay(type);
    };
    return (
        <div className="container">
            <h1 className={display === "temperature" ? "active" : ""} onClick={()=> typeHandler("temperature")}>Temperature</h1>
            <h1 className={display === "precipitation" ? "active" : ""} onClick={()=> typeHandler("precipitation")}>Precipitation</h1>
            <h1 className={display === "wind_speed" ? "active" : ""} onClick={() => typeHandler("wind_speed")}>Wind Speed</h1>
            <style jsx>{`
                  .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    
                    padding: 20px;
                }
                
                h1 {
                    padding: 30px 10px;
                    display: block;
                    width: 100%;
                }
                
                h1.active {
                    border: gray 1px solid;
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
                    width: 3px;
                    left: 17%;
                    height: 60%;
                    background: #3b3b3b;
                    top: 25%;
                }
            `}
            </style>
        </div>
    );
};

export default Sidebar;