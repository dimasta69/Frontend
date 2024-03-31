import React from "react";

import "./Box.css";
import Like from "./../../../123.png";
import Message from "./../../../message.png"


const Box = ({data}) => {
    return (
        <div className="box">
            <div className="ppp">
                <img src={Like} />
                <p style={{padding: '0 0px'}}>{data.number_of_likes}</p>
            </div>
            <div className="ppp">
                <p style={{padding: '0 5px'}}>{data.number_of_comments}</p>
                <img src={Message} className="message"/>
            </div>
        </div>
    )
}

export default Box;