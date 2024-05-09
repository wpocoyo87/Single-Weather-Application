"use Client"

import React, {useState} from 'react';
import UserInput from "@/component/UserInput/UserInput";
import Display from "@/component/Display/Display";

const Container = () => {
    const [currentTemperature , setCurrentTemperature] = useState("Waiting...");
    
    const changeTemperature = (temperature) => {
        setCurrentTemperature(temperature);
    };
    return (
        <div>
            <UserInput changeTemperature={changeTemperature}></UserInput>
            <Display temperature={currentTemperature}></Display>
        </div>
    );
};

export default Container;