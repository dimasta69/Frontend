import React from "react";
import "./Photo.css";

const Photo = (props) => {
    const imageUrl = props.photo;



    return (
        <div className="photo" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <div id="description" className="description hidden">{props.description}</div>
            <img src={imageUrl} />
        </div>
    );
};

export default Photo;