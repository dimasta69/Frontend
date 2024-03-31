import './Contents.css';

import NamePhoto from "./NamePhoto/NamePhoto.jsx"
import PhotoOne from "./PhotoOne/PhotoOne.jsx";

import React, { useState, useEffect } from "react"; 
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

const Contents = () => {
    const {id} = useParams();
    const [dataFromBackend, setDataFromBackend] = useState(null); 
    let Url = 'http://127.0.0.1:8000/core_api/photo/' + id; 
    useEffect(() => {
        axios.get(Url)
            .then(response => {
                setDataFromBackend(response.data)
            }).catch(error => {
                console.error(error);
            });
    }, [Url]);


    return (
        <div className="contents">
            <NamePhoto data={dataFromBackend}/>
            <PhotoOne data={dataFromBackend}/>
        </div>
    );
}

export default Contents;