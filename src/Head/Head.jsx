import React, {useState} from "react"; 
import './Head.css'; 
import Sort from "./Sort/Sort"; 
import { useParams } from "react-router-dom";
 
const Head = ({dataCat, handleSelectChange, sort_desc}) => { 

    

    if (!dataCat) { 
        return <div className="loading"></div>; 
    } 
  

    return ( 
        <nav className="head"> 
            <h2>{dataCat}</h2>
            <div className="sorting"> 
                <Sort sort_desc={sort_desc}/>
            </div> 
        </nav> 
    ); 
}; 
 
export default Head;