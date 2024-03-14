import React from "react";

import "./PhotoOne.css";
import catImage from "./../../cat.jpg";
import Box from "./Box/Box";
import Comments from "./Comments/Comments";

const PhotoOne = () => {
    return (
        <div className="photo_one">
            <img src={catImage} />
            <Box />
            <Comments />
        </div>
    )
}

export default PhotoOne;