import { useState } from 'react';

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <>
            <button onClick={ () => setIsOn(!isOn)}>
                {isOn ? 'ON' : 'OFF'}
            </button>

            <h1>
            The light is {isOn ? 'ON' : 'Off'} 
            </h1>
        </>
    );
};

export default Toggle;