import React from "react";
import "./DescriptionPhoto.css"


const DescriptionPhoto = () => {
    return (
        <div className='descriptionPhoto'>
            <label className="descriptionLabel">Описание:</label>
            <textarea type="text" className="descriptionInput"></textarea>
        </div>
    )
}

export default DescriptionPhoto;