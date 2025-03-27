import React, {useState} from "react";

function Details () {

    const [comment, setComment] = useState("")

    const handleTextChange = (e) => {
        setComment(e.target.value)
        console.log("Comment:", e.target.value)
    };

    const handleButtonOnClick = (e) => {
        console.log("Button Clicked", e.target.value)
    };

    return (
     <div>
        <h1>REACT FUNDAMENTALS</h1>
        <p>We are learning react</p>

        <label>"Comment: "</label>
        <textarea placeholder="Add Comment" onChange={handleTextChange}></textarea>

        <button value="Comment" onClick={handleButtonOnClick}>Sumbit</button>

     </div> 


    );
}

export default Details;