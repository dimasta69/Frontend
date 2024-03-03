import React from "react";
import "./Photos.css"
import Photo from "./Photo.jsx"
import 'bootstrap/dist/js/bootstrap.min.js';


const Photos = () => {
    return (
        <div className="photos">
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
        </div>
    )
}

export default Photos