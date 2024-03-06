import React from "react";

import './Contents.css';

import NamePhoto from "./NamePhoto/NamePhoto.jsx"
import PhotoOne from "./PhotoOne/PhotoOne.jsx";

const Contents = () => {
    return (
        <div className="contents">
            <NamePhoto />
            <PhotoOne />
        </div>
    );
}

export default Contents;