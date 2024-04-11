import React from "react";
import "./ImgPhoto.css"


const ImgPhoto = ({handleFileChange}) => {

    const handleFileInputChange = (e) => {
        handleFileChange(e);
    };


    return (
        <div className='imgPhoto'>
            <label className="imgLabel">Загрузить изображение:</label>
            <input id='photo' type="file" accept="image/*" className='imgInput' onChange={handleFileInputChange} />
        </div>
    )
}

export default ImgPhoto;