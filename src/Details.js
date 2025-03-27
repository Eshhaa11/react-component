import React from "react";

function Details () {

    const handleTextChange = (e) => {
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