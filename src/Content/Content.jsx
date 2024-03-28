import React from "react";
import axios from 'axios';
import "./Content.css"

import Photos from "../Photos/Photos.jsx"
import Head from "../Head/Head.jsx"
import Pagination from "../Pagination/Pagination.jsx";

axios.get('http://127.0.0.1:8000/core_api/photos/') 
  .then(response => { 
    console.log(JSON.stringify(response.data, null, 2));  
  }) 
  .catch(error => { 
    console.error(error); 
  });


const Content = () => {
    let srch = function(event) {
        console.log(event.target.value)
    }
    return (
        <div className="content">
            <input id="search" className="search" type="text" placeholder="Поиск..." onInput={srch}/>
            <Head />
            <Photos />
            <Pagination />
        </div>

    );
}

export default Content;