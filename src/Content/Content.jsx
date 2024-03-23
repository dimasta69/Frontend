import React from "react";
import "./Content.css"

import Photos from "../Photos/Photos.jsx"
import Head from "../Head/Head.jsx"
import Pagination from "../Pagination/Pagination.jsx";


const Content = () => {
    let srch = function(event) {
        console.log(event.target.value)
    }
    return (
        <div className="content">
            <input id="search" className="search" type="text" placeholder="Поиск..." onInput={srch}/>
            <Head />
            <Photos />
            <Pagination />
        </div>

    );
}

export default Content;