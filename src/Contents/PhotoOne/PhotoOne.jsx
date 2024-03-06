import React from "react";

import "./PhotoOne.css";
import catImage from "./../../cat.jpg";


const PhotoOne = () => {
    return (
        <div className="photo_one">
            <img src={catImage} />
        </div>
    )
}

export default PhotoOne;