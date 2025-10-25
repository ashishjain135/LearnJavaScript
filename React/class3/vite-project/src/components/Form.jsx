import { set } from "mongoose";
import { useState } from "react";

const SimpleForm = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    // const [password , setPassword] = useState("");
    const [formData, setFormData] = useState({name: "", email: ""});
    //handle change for all input fields
    const handleChange = (event) => {
        const {name, value} = event.target;//address -> updated address
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    //form submit handler
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        console.log("Form submitted!");
        console.log("Name:", name);
        console.log("Email:", email);
        // console.log("Password
        setName("");
        setEmail("");
        // setPassword("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                {/**for name input */}
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="John Doe" value={name} onChange={handleChange} // => setName(event.target.value)} 
                />
                </div>
                <div>
                {/**for email input */}
                <label htmlFor="email">Email:</label>
                <input type="email" 
                id="email"
                placeholder="johnDoe123@gmail.com"
                value={email}
                onChange={handleChange} //setEmail(event.target.value)}
                />
            </div>
            {/* submit the form */}
            <button type="submit">Submit</button>
        </form>
    )

}

export default SimpleForm;