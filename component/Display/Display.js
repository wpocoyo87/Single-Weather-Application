"use client"

import React from 'react';

const <Display =({current})> => {
    return (
        <div className={"display"}>
            <h1>{current} °C</h1>
            <h2>{JSON.stringify(hourly)}</h2>
            <style jsx>{`
            .display{
                display: flex;
                justify-content: flex-start;
                justify-item; center;
            }
            
            `}

            </style>
        </div>
    );
};

export default <Display>;