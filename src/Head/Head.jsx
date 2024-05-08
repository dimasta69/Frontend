import React, {useState} from "react"; 
import './Head.css'; 
import Sort from "./Sort/Sort"; 
import { useParams } from "react-router-dom";
 
const Head = ({dataCat, handleSelectChange, setSort_desc, sort_desc, fetchData}) => { 

    

    if (!dataCat) { 
        return <div className="loading"></div>; 
    } 
  

    return ( 
        <nav className="head"> 
            <h2>{dataCat}</h2>
            <div className="sorting"> 
                <Sort handleSelectChange={handleSelectChange} sort_desc={sort_desc} fetchData={fetchData}/>
            </div> 
        </nav> 
    ); 
}; 
 
export default Head;