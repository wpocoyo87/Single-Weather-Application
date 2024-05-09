"use Client"

import React, {useState} from 'react';
import UserInput from "@/component/UserInput/UserInput";
import Display from "@/component/Display/Display";

const Container = () => {
    const [currentTemperature : string , setCurrentTemperature] = useState(initialState: "Waiting...");
    return (
        <div>
            <UserInput changeTemperature={setCurrentTemperature}></UserInput>
            <Display temperature={currentTemperature}></Display>
        </div>
    );
};

export default Container;