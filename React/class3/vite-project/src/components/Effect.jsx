import { useState, useEffect, use } from "react";

function ExampleComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        const timer = setInterval(() => {
            console.log("Timer tick:");
        },1000)
        //cleanup function or as part of unmounting
        return () => {
            clearInterval (timer);
        }
    }, []); //dependency array

    return(
        <div>
            <p>You clicked{count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
export default ExampleComponent;    