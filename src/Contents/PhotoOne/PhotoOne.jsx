import React from "react";

import "./PhotoOne.css";
import catImage from "./../../cat.jpg";
import Box from "./Box/Box";
import Box1 from "./Box1/Box1";
import Comments from "./Comments/Comments";
import "./Comments/Comments.css"
import Pagination from "../../Pagination/Pagination"
import Message from "./Message/Message";
import Descriptions from "./Description/Descriptions";

const PhotoOne = () => {
    return (
        <div className="photo_one">
            <img src={catImage}  style={{ width: '480px', height: '270px' }} />
            <Box />
            <Box1/>
            <div class="center">
                 <button class="buttons"></button>
             </div>
             <p style={{width: '480px',color: '#605b53'}}>Описание:</p>
            <Descriptions />
            <p style={{width: '480px',color: '#605b53'}}>Комментарии:</p>
            <Comments />
            <Pagination />
            <Message  />
        </div>
    )
}

export default PhotoOne;