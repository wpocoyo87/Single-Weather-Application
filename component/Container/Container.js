"use Client"

import React from 'react';
import UserInput from '../UserInput/UserInput';
import Display from '../UserInput/UserInput';

const Container = () => {
    const [currentTemperature : string , setCurrentTemperature] = useState(initialState "Waiting...");
    return (
        <div>
            <UserInput></UserInput>
            <Display temperature={currentTemperature}></Display>
        </div>
    );
};

export default Container;