import React from "react";
import Like from "./../123.png";
import Message from "./../message.png"

import "./Name.css"


const Name = () => {
    return (
        <div className="name">
            <img src={Like} />
            <p style={{padding: '0 0px'}}>1213</p>
            <p style={{padding: '0 60px'}}>Name</p>
            <img src={Message} className="message"/>
            <p style={{padding: '0 2px'}}>10120</p>
        </div>
    )
}

export default Name;