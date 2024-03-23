import React from "react";

import Photo from "./Photo";
import Title from "./Title";
import User from "./User";


import "./Conteiner.css"

const Conteiner = () => {
    let showDesc = function(event) {
        event.target.parentElement.children[0].classList.toggle('hidden');
    }
    let hideDesc = function(event) {
        event.target.parentElement.children[0].classList.toggle('hidden');
    }
    return (
        <div className="conteiner">
            <Photo onMouseEnter={showDesc} onMouseLeave={hideDesc}/>
            <Title />
            <User />
        </div>
    )
}
export default Conteiner;