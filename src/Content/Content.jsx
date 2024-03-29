import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Content.css"

import Photos from "../Photos/Photos.jsx"
import Head from "../Head/Head.jsx"
import Pagination from "../Pagination/Pagination.jsx";

const Content = () => {
  
    const [dataFromBackend, setDataFromBackend] = useState(null);

    const fetchData = (page) => {
        let Url;
        if (page) {
            Url = 'http://127.0.0.1:8000/core_api/photos/?page=' + page + '&order_by=-publicated_at';
        } else {
            Url = 'http://127.0.0.1:8000/core_api/photos/' + '?order_by=publicated_at';
        }

        axios.get(Url)
            .then(response => { 
                setDataFromBackend(response.data);
            }) 
            .catch(error => { 
                console.error(error); 
            });
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    let srch = function(event) {
        console.log(event.target.value)
    }

    return (
        <div className="content">
            <input id="search" className="search" type="text" placeholder="Поиск..." onInput={srch}/>
            <Head />
            <Photos data={dataFromBackend}/>
            <Pagination data={dataFromBackend} fetchData={fetchData} />
        </div>
    );
}

export default Content;