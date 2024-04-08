import React, { useState, useEffect } from "react"; 
import './Sort.css' 
import { useParams } from "react-router-dom"; 
 
const Sort = ({sort_desc}) => { 
    const [selectedItem, setSelectedItem] = useState('Количество голосов'); 
    const [isOpen, setIsOpen] = useState(false); 
 
    let somefunc = function(event) {
        if (event.target.getAttribute("id") == 'ganji') 
        {
            let sort = document.getElementById('list'); 
            sort.classList.toggle('hidden');
        } 
    } 
 
    const handleItemClick = (item) => { 
        setSelectedItem(item); 
        setIsOpen(false) 
    } 
    const toggleList = () => { 
        setIsOpen(!isOpen);  
    }; 

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sortList = document.getElementById('list');
            if (sortList && !sortList.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    let sort = useParams().sort_by

    let sort_name;
    if(!sort || sort == 'date')
    {
        sort_name = "дате"
    }
    else if (sort == 'count_comment')
    {
        sort_name = 'количеству коментариев'
    }
    else if (sort == 'count_like')
    {
        sort_name = 'количеству лайков'
    }

    let date, comment, like;
        date = 'http://localhost:3000/'
    let date1 = 'http://localhost:3000/sort_by/date/asc/'
        comment = 'http://localhost:3000/sort_by/count_comment/desc/'
    let comment1 = 'http://localhost:3000/sort_by/count_comment/asc/'    
        like = 'http://localhost:3000/sort_by/count_like/desc/'
    let like1 = 'http://localhost:3000/sort_by/count_like/asc/'
    

    return(
        <div>
        <nav className="sort">
            <p id="ganji" onClick={somefunc} className="ganji">{sort_name}</p>
            <p>Сортировка по:</p>
            <ul className="list hidden" id ='list'>
                <li><a href={date} onClick={() => handleItemClick('-Дата добавления')}>+дате</a></li>
                <li><a href={date1} onClick={() => handleItemClick('-Дата добавления')}>-дате</a></li>
                <li><a href={comment} onClick={() => handleItemClick('+Количество комментариев')}>+количеству комментариев</a></li>
                <li><a href={comment1} onClick={() => handleItemClick('-Количество комментариев')}>-количеству комментариев</a></li>
                <li><a href={like} onClick={() => handleItemClick('+Количество голосов')}>+количеству голосов</a></li>
                <li><a href={like1} onClick={() => handleItemClick('-Количество голосов')}>-количеству голосов</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Sort;