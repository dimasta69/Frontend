import './Contents.css';

import NamePhoto from "./NamePhoto/NamePhoto.jsx"
import PhotoOne from "./PhotoOne/PhotoOne.jsx";

import React, { useState, useEffect } from "react"; 
import { useParams } from 'react-router-dom';
import axios from 'axios'; 


const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });

const Contents = ({dataCategory}) => {

    const {id} = useParams();
    const [dataFromBackend, setDataFromBackend] = useState(null); 
    let Url = '/core_api/photo/' + id; 


    useEffect(() => {
        if (localStorage.getItem('token'))
    {
        axiosInstance.get(Url)
            .then(response => {
                setDataFromBackend(response.data)
            }).catch(error => {
                console.error(error);
            });
    }
    else {
        axios.get(Url)
            .then(response => {
                setDataFromBackend(response.data)
            }).catch(error => {
                console.error(error);
            }); }
    }, [Url]);
    


        const [dataBackend, setDataBackend] = useState(null); 
        let UrlLike = "/core_api/like/?photo_id=" + id

        useEffect(() => {
            if (localStorage.getItem('token')) {
                axiosInstance.get(UrlLike)
                .then(response => {
                    setDataBackend(response.data)
                    console.log(response.data)
                }).catch(error => {
                    console.error(error);
                });
            }
            else {
                axios.get(UrlLike)
                .then(response => {
                    setDataBackend(response.data)
                }).catch(error => {
                    console.error(error);
                });
            } 
        }, [UrlLike]);
        if (localStorage.getItem('token'))
        {
        }


        if (!dataBackend) {
    return (
                <div className="contents">
            <NamePhoto data={dataFromBackend}/> 
            <PhotoOne data={dataFromBackend} like={"1"} />
        </div>
            )
        }


    return (
        <div className="contents">
            <NamePhoto data={dataFromBackend}/>
            <PhotoOne data={dataFromBackend} like={dataBackend} dataCategory={dataCategory}/>
        </div>
    );
}

export default Contents;