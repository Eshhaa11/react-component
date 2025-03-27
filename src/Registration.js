import React, {useState} from "react";

function Registration () {

    const [username, setUserName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const handleUserNameChange = (e) => setUserName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);


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

            <button onClick={handleButtonOnClick}>Submit</button>

        </div>
    );
}

export default Registration;