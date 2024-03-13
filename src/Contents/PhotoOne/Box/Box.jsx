import React from "react";

import "./Box.css";
import Like from "./../../../123.png";
import Message from "./../../../message.png"


const Box = () => {
    return (
        <div className="box">
            <img src={Like} />
            <p style={{padding: '0 0px'}}>1213</p>
            <p style={{padding: '0 177px'}}></p>
            <img src={Message} className="message"/>
            <p style={{padding: '0 2px'}}>10120</p>
        </div>
    )
}

export default Box;