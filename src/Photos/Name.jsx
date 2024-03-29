import React from "react";
import Like from "./../123.png";
import Message from "./../message.png"

import "./Name.css"


const Name = ({ name, like, comments}) => {
    return (
        <div className="name">
            <div className="like-container">
        <img src={Like} className="like"/>
        <p className="likec">{like}</p>
    </div>
            <p className="name1">{name}</p>
            <div className="com-container">
            <p>{comments}</p>
            <img src={Message} className="message"/>
            </div>
        </div>
    )
}

export default Name;