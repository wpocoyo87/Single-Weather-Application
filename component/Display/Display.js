"use client"
import React from 'react';
import moment from 'moment-timezone';

const Display = ({ hourly, unit, selectedDataType }) => {
    const formatTime = (utcTime) => {
        return moment.utc(utcTime).format('HH:mm');
    };

    const renderDataColumn = () => {
        switch (selectedDataType) {
            case 'temperature':
                return (
                    <div className="hourly-column">
                        <p>Temperature</p>
                        {hourly && hourly.temperature_2m && hourly.temperature_2m.map((temp, index) => (
                            <p key={index}>{temp} {unit}</p>
                        ))}
                    </div>
                );
            case 'precipitation':
                return (
                    <div className="hourly-column">
                        <p>Precipitation</p>
                        {hourly && hourly.precipitation && hourly.precipitation.map((precip, index) => (
                            <p key={index}>{precip} {unit}</p>
                        ))}
                    </div>
                );
            case 'wind_speed':
                console.log(hourly);
                    return (
                    <div className="hourly-column">
                        <p>Wind Speed</p>
                        {hourly && hourly.wind_speed_10m && hourly.wind_speed_10m.map((speed, index) => (
                        <p key={index}>{speed} {unit}</p>
                    ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={"display"}>
            <div className="hourly-forecast">
                <h2>Hourly Data:</h2>
                <div className="hourly-table">
                    <div className="hourly-column">
                        <p>Time</p>
                        {hourly && hourly.time && hourly.time.map((utcTime, index) => (
                            <p key={index}>{formatTime(utcTime)}</p>
                        ))}
                    </div>
                    {renderDataColumn()}
                </div>
            </div>
            <style jsx>{`
                .display {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .hourly-forecast {
                    width: 100%;
                }

                .hourly-table {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .hourly-column {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0 10px;
                }

                .hourly-column p {
                    margin: 5px 0;
                }
            `}</style>
        </div>
    );
};

export default Display;