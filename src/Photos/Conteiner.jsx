import React from "react";

import Photo from "./Photo";
import Title from "./Title";
import User from "./User";


import "./Conteiner.css"

const Conteiner = ({ photoData }) => {
    let showDesc = function(event) {
        event.target.parentElement.children[0].classList.toggle('hidden');
    }
    let hideDesc = function(event) {
        event.target.parentElement.children[0].classList.toggle('hidden');
    }
    return (
        <div className="conteiner">
            <Photo onMouseEnter={showDesc} onMouseLeave={hideDesc} photo={photoData.photo_space} description={photoData.description}/>
            <Title name={photoData.title} like={photoData.number_of_likes} comments={photoData.number_of_comments}/>
            <User name={photoData.user.username} time={photoData.publicated_at}/>
        </div>
    )
}
export default Conteiner;