import React, {useState} from "react";

function FormInput () {

    const [name, setName] = useState("");
    

    const handleNameChange = (e) => {
        console.log("Name:", e.target.value);
    };

    const handleNumberChange = (e) => {
        console.log("Number:", e.target.value);
    };

    const handlePasswordChange = (e) => {
        console.log("Password:", e.target.value);
    };

    const handleOnClick = (e) => {
        console.log("Button has been clicked!", e.target.value);
    };

    return (
        <div>
            <h2>User's Details</h2>
            <label>Name: </label>
            <input type="text" placeholder="Name" onChange={handleNameChange}/>

            <label>Number:</label>
            <input type="number" placeholder="Number" onChange={handleNumberChange} />

            <label>Password:</label>
            <input type="password" placeholder="Password"  onChange={handlePasswordChange} />

            <button onClick={handleOnClick}>Sumbit Details</button>
        </div>

    );

}

export default FormInput;