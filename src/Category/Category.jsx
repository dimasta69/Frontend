import React, { useState, useEffect } from "react";
import './Category.css'
import axios from 'axios'; 

import Categor from "./Categor/Categor";

const Category = ({setDataCategory}) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        axios.get('/core_api/categories/')
            .then(response => { 
                setCategory(response.data)
                let category = response.data 
                setDataCategory(category)
            }) 
            .catch(error => { 
                console.error(error); 
            });
    }, []); 

    if (!category) {
        return <div className="loading"></div>;
    }

    return (
        <div className="category">
            {category.map((item) => (
                <Categor key={item.id} data={item} />
            ))}
        </div>
    )
}

export default Category;
