import { useState } from "react";

function TemperatureInput({temperature, onTempearatureChange}){
    // const [temperature , setTemperature] = useState('');

    return(
        <div>
            <label>Enter Temperature</label>
            <input type="Text" value={temperature} onChange={(e) =>onTempearatureChange(e.target.value) }></input>

        </div>
    )
}


export default TemperatureInput;   
