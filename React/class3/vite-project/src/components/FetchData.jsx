import { set } from "mongoose";
import { useState, useEffect } from "react";

function FetctDataComponent() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []); //empty dependency array to run only once on mount


    return(
        <div>
            {data ? (<p>Data Loaded...with first user {data[0].name} </p>)
            : ( <p>Loading Data...</p> )}
        </div>
    )
}

export default FetctDataComponent;