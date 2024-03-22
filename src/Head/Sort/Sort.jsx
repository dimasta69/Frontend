import React from "react";
import './Sort.css'


const Sort = () => {
    let somefunc = function() {
        let sort = document.getElementById('gonchar');
        sort.classList.toggle('hidden');
    }
    return(
        <nav className="sort">
            <p id="ganji" onClick={somefunc} className="ganji">текст</p>
            <p>Сортировка:</p>
            <ul className="hidden" id ='gonchar'>
                <li>
                    <a href="">Гончар</a>
                </li>
                <li>
                    <a href="">пидр</a>
                </li>
            </ul>
        </nav>
    )
}

export default Sort