import React from "react";
import "./AddPhoto.css"

import TitlePhoto from "./TitlePhoto/TitlePhoto";
import ImgPhoto from "./ImgPhoto/ImgPhoto";
import DescriptionPhoto from "./DescriptionPhoto/DescriptionPhoto";

const AddPhoto = () => {
    return (
        <div className='addPhoto'>
            <TitlePhoto />
            <ImgPhoto />
            <DescriptionPhoto />
        </div>
    )
}

export default AddPhoto;