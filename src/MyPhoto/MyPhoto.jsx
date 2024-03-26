import React from "react";
import "./MyPhoto.css"

import Photos from "../Photos/Photos";
import StatusPhoto from "./StatusPhoto/StatusPhoto";
import Pagination from "../Pagination/Pagination";

import "../Photos/Photos.css";


const MyPhoto = () => {
    return (
        <div className="myPhoto">
            <p className="myP">Мои фотографии</p>
            <StatusPhoto />
            <Photos className='photos'/>
            <Pagination />
        </div>
    );
}

export default MyPhoto;