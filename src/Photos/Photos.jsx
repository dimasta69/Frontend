import React from "react";
import "./Photos.css";
import Conteiner from "./Conteiner";

const Photos = ({ data }) => {
    if (!data || !data.results) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="photos">
            {data.results.map((item) => {
                let rl = 'http://localhost:3000/photo/' + item.id;
                return (
                    <a key={item.id} style={{ textDecoration: 'none' }} href={rl}>
                        <Conteiner photoData={item} />
                    </a>
                );
            })}
        </div>
    );
};

export default Photos;