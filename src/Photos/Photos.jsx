import React from "react";
import "./Photos.css";
import Conteiner from "./Conteiner";


const Photos = ({data}) => {
    if (!data || !data.results) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="photos">
          {data.results.map((item) => (
            <Conteiner key={item.id} photoData={item} />
          ))}
        </div>
      );
}

export default Photos;