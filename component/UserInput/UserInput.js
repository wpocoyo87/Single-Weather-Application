import React from 'react';

const UserInput = ({changeTemperature}) => {
    const onClickHandler =() :void => {
        console.log(changeTemperature)
        
        changeTemperature("0°C")

    
    }
    return (
        <div>
            <label>
                <span>Latitude</span>
                <input type={"text"} placeholder={"latitude"}></input>
            </label>

            <button onClick={onClickHandler}>Submit</button>
        </div>
    );
};

export default UserInput;