import React, { useState, useEffect } from "react"; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom'; 
import "./MyPhoto.css"

import Photos from "../Photos/Photos";
import StatusPhoto from "./StatusPhoto/StatusPhoto";
import Pagination from "../Pagination/Pagination";

import "../Photos/Photos.css";

const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });

const MyPhoto = () => {

    let status = useParams('status').status

    const [dataFromBackend, setDataFromBackend] = useState(null); 

    let Url = 'http://127.0.0.1:8000/core_api/photos/?user_id=' + localStorage.getItem('user_id') + "&status=" + status
    

    const fetchData = (page) => {
        Url += '&page=' + page;

        axiosInstance.get(Url)
        .then(response => {  
            setDataFromBackend(response.data); 
            console.log(response.data); 
        })  
        .catch(error => {  
            console.error(error);  
        });

    }
    useEffect(() => { 
        fetchData(1); 
    }, []); 



    return (
        <div className="myPhoto">
            <div className='head_add'>
                <h2 className="myP">Мои фотографии</h2>
                <a href="/add_photo/"><button >Добавить фотографию</button></a>
            </div>
            <StatusPhoto />
            <Photos className='photos' data={dataFromBackend}/>
            <Pagination data={dataFromBackend} fetchData={fetchData}/>
        </div>
    );
}

export default MyPhoto;