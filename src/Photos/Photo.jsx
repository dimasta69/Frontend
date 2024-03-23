import React from "react";
import "./Photo.css"
import catImage from "./../cat.jpg";


const Photo = (props) => {
    return (
        <div className="photo" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <div id="description" className="description hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, ut?</div>
            <img src={catImage} />
        </div>
    )
}

export default Photo;