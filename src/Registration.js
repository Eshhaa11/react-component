import React from "react";

function Registration () {

    const handleButtonOnClick = (e) => {
        console.log("UserName: ", username);
        console.log("Email: ", email);
        console.log("Password: ", password);
        console.log("Confirm Password: ", confirmpassword);
    };
    return (
        <div>
            <label>UserName:</label>
            <input type="text" placeholder="Username" />

            <label>Email: </label>
            <input type="email" placeholder="Email" />

            <label>Password: </label>
            <input type="password" placeholder="Password" />

            <label>Confirm Password: </label>
            <input type="password" placeholder="Confirm Password" />

            <button onClick={}>Submit</button>

        </div>
    );
}