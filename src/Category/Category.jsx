import React, { useState, useEffect } from "react";
import './Category.css'
import axios from 'axios'; 

import Categor from "./Categor/Categor";

const Category = () => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/core_api/categories/')
            .then(response => { 
                setCategory(response.data)
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
