import React from "react"; 
import './Head.css'; 
import Sort from "./Sort/Sort"; 
 
const Head = ({dataCat}) => { 
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
            <Sort /> 
        </nav> 
    ); 
}; 
 
export default Head;