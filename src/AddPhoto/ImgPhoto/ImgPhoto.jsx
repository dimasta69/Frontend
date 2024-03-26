import React from "react";
import "./ImgPhoto.css"


const ImgPhoto = () => {
    return (
        <div className='imgPhoto'>
            <label className="imgLabel">Загрузить изображение:</label>
            <input type="file" accept="image/*" className='imgInput'/>
        </div>
    )
}

export default ImgPhoto;