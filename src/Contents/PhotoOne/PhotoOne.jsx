import React from "react";
import "./PhotoOne.css";
import Box from "./Box/Box";
import Box1 from "./Box1/Box1";
import Comments from "./Comments/Comments";
import Pagination from "../../Pagination/Pagination";
import Message from "./Message/Message";
import Descriptions from "./Description/Descriptions";

const PhotoOne = ({ data }) => {
    if (!data || !data.photo) {
        return null; // Возвращаем null или другую заглушку, если data или data.photo не существуют
    }

    let Url = "http://127.0.0.1:8000/" + data.photo;
    
    return (
        <div className="photo_one">
            <img src={Url} style={{ width: '480px', height: '270px' }} />
            <Box data={data}/>
            <Box1 data={data}/>
            <div className="center">
                <button className="buttons"></button>
            </div>
            <p style={{ width: '480px', color: '#605b53' }}>Описание:</p>
            <Descriptions data={data}/>
            <p style={{ width: '480px', color: '#605b53' }}>Комментарии:</p>
            <Comments />
            <Pagination />
            <Message />
        </div>
    );
}

export default PhotoOne;    