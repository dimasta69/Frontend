import React from "react";

import './Title.css'

import Name from "./Name";

const Title = ({ name, like, comments}) => {
    return (
        <div className="title">
            <Name name={name} like={like} comments={comments}/>
        </div>
    )
}

export default Title;