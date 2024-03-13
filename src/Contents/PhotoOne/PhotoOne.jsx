import React from "react";

import "./PhotoOne.css";
import catImage from "./../../cat.jpg";
import Box from "./Box/Box";

const PhotoOne = () => {
    return (
        <div className="photo_one">
            <img src={catImage} />
            <Box />
        </div>
    )
}

export default PhotoOne;