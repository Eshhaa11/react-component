import React from "react";

function FormInput () {
    return (
        <div>
            <h2>User's Details</h2>
            <label>Name: </label>
            <input type="text" placeholder="Name" />

            <label>Number:</label>
            <input type="number" placeholder="Number" />

            <label>Password:</label>
            <input type="password" placeholder="Password" />
        </div>

    );

}

export default FormInput;