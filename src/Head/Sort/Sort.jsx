import React, { useState, useEffect } from "react"; 
import './Sort.css' 

 
const Sort = ({handleSelectChange, sort_desc, fetchData}) => { 
 
    let somefunc = function(event) {

            let sort = document.getElementById('list'); 
            sort.classList.toggle('hidden');

    } 
 
    const handleItemClick = () => { 
        handleSelectChange('+Дата добавления')
    } 
    const handleItemClick2 = () => { 
        handleSelectChange('-Дата добавления')
    } 
    const handleItemClick3 = () => { 
        handleSelectChange('+Количество комментариев')
    } 
    const handleItemClick4 = () => { 
        handleSelectChange('-Количество комментариев')
    } 
    const handleItemClick5 = () => { 
        handleSelectChange('+Количество голосов')
    } 
    const handleItemClick6 = () => { 
        handleSelectChange('-Количество голосов')
    } 



    let sort_name

    if (!sort_desc)
        {
             sort_name = 'дате';
        }
    else {
         sort_name = sort_desc;
    }

    return(
        <div>
        <nav className="sort">
            <p id="ganji" onClick={somefunc} className="ganji">{sort_name}</p>
            <p>Сортировка по:</p>
            <ul className="list hidden" id ='list'>
                <li><buttun onClick={handleItemClick}>+дате</buttun></li>
                <li><buttun onClick={handleItemClick2}>-дате</buttun></li>
                <li><buttun  onClick={handleItemClick3}>+количеству комментариев</buttun></li>
                <li><buttun  onClick={handleItemClick4}>-количеству комментариев</buttun></li>
                <li><buttun  onClick={handleItemClick5}>+количеству голосов</buttun></li>
                <li><buttun onClick={handleItemClick6}>-количеству голосов</buttun></li>
            </ul>
        </nav>
        </div>
    )
}

export default Sort;