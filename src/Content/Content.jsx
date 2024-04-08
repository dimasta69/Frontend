import React, { useState, useEffect } from "react"; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom'; 
import "./Content.css" 
 
import Photos from "../Photos/Photos.jsx" 
import Head from "../Head/Head.jsx" 
import Pagination from "../Pagination/Pagination.jsx"; 



const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });
 
const Content = () => { 
   
    const [dataFromBackend, setDataFromBackend] = useState(null); 
    const [dataCat, setDataCat] = useState(null); 
    const { category } = useParams(); 
    let parm = useParams().sort_by;
    let ss = useParams().asc;
    
    const asc = useParams().asc
    const [sort_desc, setSort_desc] = useState('')
    const handleSelectChange = (event) => {
        setSort_desc(event)
    };

   
    let desc = '';
    if (asc == 'desc' || !asc)
    {
        desc = '-';
    }
    else {
        desc=""
    }



    const fetchData = (page) => { 
        let Url; 
        if (category){ 
            Url = 'http://127.0.0.1:8000/core_api/photos/?category_id=' + category
            if (!parm)
            {
                Url = Url + '&order_by=' + desc + 'publicated_at'
            }
            else if (parm == 'count_comment')
            {
                Url = Url + '&order_by=' + desc + 'number_of_comments'   
            }
            else if (parm == 'count_like')
            {
                Url = Url + '&order_by=' + desc + 'number_of_likes'
            } 
        } 
        else if (page) { 
            if (category) 
            { 
                Url = Url + '&page=' + page ; 
                if (!parm)
            {
                 Url = Url + '&order_by=' + desc + 'publicated_at'
            }
            else if (parm == 'count_comment')
            {
                Url = Url + '&order_by=' + desc + 'number_of_comments'   
            }
            else if (parm == 'count_like')
            {
                Url = Url + '&order_by=' + desc + 'number_of_likes'
            } 
            } 
            else { 
                Url = 'http://127.0.0.1:8000/core_api/photos/?page=' + page 
                if (!parm  || parm == 'date')
            {
                Url = Url + '&order_by=' + desc + 'publicated_at'
            }
            else if (parm == 'count_comment')
            {
                Url = Url + '&order_by=' + desc + 'number_of_comments'   
            }
            else if (parm == 'count_like')
            {
                Url = Url + '&order_by=' + desc + 'number_of_likes'
            } 
            } 
        } 
         else { 
            Url = 'http://127.0.0.1:8000/core_api/photos/'; 
            if (!parm)
            {
                Url = Url + '?order_by=' + desc + 'publicated_at'
            }
            else if (parm == 'count_comment')
            {
                Url = Url + '?order_by=' + desc + 'number_of_comments'   
            }
            else if (parm == 'count_like')
            {
                Url = Url + '?order_by=' + desc + 'number_of_likes'
            } 
        } 
        
        if(localStorage.getItem('token')){
            axiosInstance.get(Url) 
            .then(response => {  
                setDataFromBackend(response.data); 
                console.log(response.headers); 
            })  
            .catch(error => {  
                console.error(error);  
            }); 
        }
        else {
            axios.get(Url) 
            .then(response => {  
                setDataFromBackend(response.data); 
                console.log(response.headers); 
            })  
            .catch(error => {  
                console.error(error);  
            }); 
        }

        if (category){
 
        let Url1 = 'http://127.0.0.1:8000/core_api/category/' + category 
        axiosInstance.get(Url1) 
            .then(response => {  
                setDataCat(response.data); 
            })  
            .catch(error => {  
                console.error(error);  
            }); 
        }
        else {
            setDataCat("Все фотографии")
        }
             
    }; 
 
    useEffect(() => { 
        fetchData(1); 
    }, []); 
 
    let srch = function(event) { 
        console.log(event.target.value) 
    } 
 
    return ( 
        <div className="content" id='content'> 
            <input id="search" className="search" type="text" placeholder="Поиск..." onInput={srch}/> 
            <Head dataCat={dataCat} handleSelectChange={handleSelectChange} sort_desc={sort_desc}/> 
            <Photos data={dataFromBackend}/> 
            <Pagination data={dataFromBackend} fetchData={fetchData} /> 
        </div> 
    ); 
} 
 
export default Content;