import React from "react";
import "./NamePhoto.css"

const NamePhoto = ({data}) => {
    if (!data) { 
        return <div className="loading"></div>; 
    } 
    return (
        <div className="name_photo">
            <h2>
                {data.title} 
            </h2>
        </div>
    )
}

export default NamePhoto;