import React from "react";

import Photo from "./Photo";
import Title from "./Title";

import "./Conteiner.css"

const Conteiner = () => {
    return (
        <div className="conteiner">
            <Photo />
            <Title />
        </div>
    )
}
export default Conteiner;