import React from "react";
import "./Content.css"

import Photos from "../Photos/Photos.jsx"
import Head from "../Head/Head.jsx"
import Pagination from "../Pagination/Pagination.jsx";


const Content = () => {
    return (
        <div className="content">
            <Head />
            <Photos />
            <Pagination />
        </div>

    );
}

export default Content;