import React from "react";
import "./Content.css"

import Photos from "../Photos/Photos.jsx"
import Head from "../Head/Head.jsx"


const Content = () => {
    return (
        <div className="content">
            <Head />
            <Photos />
        </div>

    );
}

export default Content;