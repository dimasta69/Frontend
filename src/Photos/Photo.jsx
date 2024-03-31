import React from "react";
import "./Photo.css";

const Photo = (props) => {
    const imageUrl = 'http://127.0.0.1:8000/' + props.photo;



    return (
        <div className="photo" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <div id="description" className="description hidden">{props.description}</div>
            <img src={imageUrl} />
        </div>
    );
};

export default Photo;