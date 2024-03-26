import React from "react";
import "./AddPhoto.css"

import TitlePhoto from "./TitlePhoto/TitlePhoto";
import ImgPhoto from "./ImgPhoto/ImgPhoto";
import DescriptionPhoto from "./DescriptionPhoto/DescriptionPhoto";
import CategoryPhoto from "./CategoryPhoto/CategoryPhoto";

const AddPhoto = () => {
    return (
        <div className='addPhoto'>
            <TitlePhoto />
            <ImgPhoto />
            <DescriptionPhoto />
            <CategoryPhoto />
            <button className="addButton">Отправить</button>
        </div>
    )
}

export default AddPhoto;