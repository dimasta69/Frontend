import React from "react";
import './Categor.css'


const Categor = ({data}) => {
    return (
        <div className="categor">
            <a href="">{data.title}</a>
            <p>{data.count_photo}</p>
        </div>
    )
}

export default Categor