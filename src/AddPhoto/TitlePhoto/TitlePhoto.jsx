import React from "react";
import "./TitlePhoto.css"


const TitlePhoto = () => {
    return (
        <div className='titlePhoto'>
            <label className="labelPhoto">Название фотографии:</label>
            <input id='title' className="inputName"></input>
        </div>
    )
}

export default TitlePhoto;