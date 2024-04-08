import React, {useState} from "react"; 
import './Head.css'; 
import Sort from "./Sort/Sort"; 
import { useParams } from "react-router-dom";
 
const Head = ({dataCat, handleSelectChange, sort_desc}) => { 
    let categories = 'Все фотографии'; 

    

    if (!dataCat) { 
        return <div className="loading"></div>; 
    } 
 
     
    if (dataCat) { 
        if (dataCat == 'Все фотографии')
        {categories = 'Все фотографии'}
        else{
        categories = dataCat.title;
    } 
    } 

    return ( 
        <nav className="head"> 
            <h2>{categories}</h2>
            <div className="sorting"> 
                <Sort sort_desc={sort_desc}/>
            </div> 
        </nav> 
    ); 
}; 
 
export default Head;