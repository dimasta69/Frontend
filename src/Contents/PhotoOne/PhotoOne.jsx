import React from "react";

import "./PhotoOne.css";
import catImage from "./../../cat.jpg";
import Box from "./Box/Box";
import Comments from "./Comments/Comments";
import "./Comments/Comments.css"
import Pagination from "../../Pagination/Pagination"
import Message from "./Message/Message";

const PhotoOne = () => {
    return (
        <div className="photo_one">
            <img src={catImage}  style={{ width: '480px', height: '270px' }} />
            <Box />
            <button className="buttons"/>
            <Comments />
            <Pagination />
            <Message  />
        </div>
    )
}

export default PhotoOne;