"use client"

import React from 'react';

const Sidebar = (display, changeDisplay) => {
    const typeHandler = (type) => {
        changeDisplay(type)
        console.log(type)
    }
    return (
        <div> className={"container"}
            <h1 className={display --- "temperature" ? "active" : ""} onClick={()=> typeHandler("temperature")}>Temperature</h1>
            <h1 className={display --- "precipitation" ? "active" : ""}onClick={()=> typeHandler("precipitation")}>Precipitation</h1>
            <h1 className={display --- "wind" ? "active" : ""}onClick={()=> typeHandler("wind")}>Wind Spped</h1>
            <style jsx>{`
                .container{
                    display: flex:
                    flex-direction: column;
                    align-item: center;
                    justify-content: center;

                    padding:20px;
                    border-right: 2px solid;
                    border-image: linear-gradient(to right, grey 50%, transparent 50%) 100% 1;
                }

                h1 {
                    padding: 10px;
                }

                h1.active {
                    border: gray 1px solid;
                }

                .container:after {
                    content:"";
                    position: absolute;
                    width: 3px;
                    right: -3px;
                    height: 60%;
                    background: red;
                    top: 50%;
                    transfom: translate(-50%, -50%);
                }
            `}
            </style>
        </div>
    );
};

export default Sidebar;