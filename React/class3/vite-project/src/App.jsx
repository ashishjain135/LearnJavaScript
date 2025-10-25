import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/Form';
import TemperatureInput from './components/Temperatureinput';
import TemperatureDisplay from './components/Temperaturedisplay';
import ExampleComponent from './components/Effect';
import FetchDataComponent from './components/FetchData';


function App() {
  const [count, setCount] = useState(0); //return an array with two elements



  // const arr = useState(0) // return an array with two elements
  // const count = arr[0] // first element is the current state value
  // const setCount = arr[1] // second element is the function to update the state



// common useState for temperature input and display
const [temperature , setTemperature] = useState('');
//handler for temperature change
const handleTemperatureChange = (newtemperature) =>{
  setTemperature(newtemperature);
}



  //update the count 
  const incrementCount = () => {
    setCount(count + 1); //updateing the count state with new value
  }
  const decrementCount =() =>{
    if(count>0){
    setCount(count - 1);
    }
  }
  return (
    <>
      {/* <p>Count : {count}</p>
      <button onClick = {incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <SimpleForm />

      {/**import temperature files*}  
      <TemperatureInput temperature={temperature} onTempearatureChange={handleTemperatureChange}/>
      <TemperatureDisplay temperature={temperature} /> */}


        <ExampleComponent />
        <FetchDataComponent />
    </>
  )
}

export default App
