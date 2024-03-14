import React from "react";

import './Comment.css';

import Text from "./Text/Text";
import Title from "./Title/Title";


const Comment = () => {
    return (
        <div className="comment">
            <Title />
            <Text /> 
        </div>
    )
}

export default Comment;