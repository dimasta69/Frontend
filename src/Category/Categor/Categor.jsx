import React from "react";
import './Categor.css'


const Categor = ({data}) => {
    const url = '/category/' + data.id
    return (
        <div className="categor">
            <a href={url}>{data.title}</a>
            <p>{data.count_photo}</p>
        </div>
    )
}

export default Categor