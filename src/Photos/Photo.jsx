import React from "react";
import "./Photo.css"
import catImage from "./../cat.jpg";


const Photo = () => {
    return (
        <div className="photo">
            <img src={catImage} />
        </div>
    )
}

export default Photo;