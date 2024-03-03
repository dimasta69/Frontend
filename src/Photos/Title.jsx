import React from "react";

import './Title.css'

import Name from "./Name";
import User from "./User";

const Title = () => {
    return (
        <div className="title">
            <Name />
            <User />
        </div>
    )
}

export default Title;