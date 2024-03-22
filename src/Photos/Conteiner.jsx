import React from "react";

import Photo from "./Photo";
import Title from "./Title";
import User from "./User";


import "./Conteiner.css"

const Conteiner = () => {
    return (
        <div className="conteiner">
            <Photo />
            <Title />
            <User />
        </div>
    )
}
export default Conteiner;