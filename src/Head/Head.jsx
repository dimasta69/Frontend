import React from "react";
import './Head.css'

import Sort from "./Sort/Sort";


const Head = () => {
    return(
        <nav className="head">
            <h2>Фотографии</h2>
            <Sort />
        </nav>
    )
}

export default Head