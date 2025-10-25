import {useState} from 'react';

function TemperatureDisplay({temperature
}){
    // const [temperature , setTemperature] = useState('');
    const  fehrenheit = (temperature * 9/5) + 32;
    return(
        <div>
            <p>Temperature in Calcius :{temperature} deg C</p>
            <p>Temperature in Fehrenheit :{fehrenheit} deg f</p>
        </div>
    )
}

export default TemperatureDisplay;