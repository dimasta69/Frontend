import React from "react";
import './Sort.css'


const Sort = () => {
    let somefunc = function() {
        let sort = document.getElementById('list');
        sort.classList.toggle('hidden');
    }

    return(
        <nav className="sort">
            <p id="ganji" onClick={somefunc} className="ganji">текст</p>
            <p>Сортировка:</p>
            <ul className="list hidden" id ='list'>
                <li><a href=' '>Количество голосов</a></li>
                <li><a href=' '>Количество коментариев</a></li>
                <li><a href=' '>Дата добавлени</a></li>
            </ul>
        </nav>
    )
}

export default Sort