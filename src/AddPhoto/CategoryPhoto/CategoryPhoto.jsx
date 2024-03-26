import React from "react";
import "./CategoryPhoto.css"
import { useState } from 'react';


const CategoryPhoto = () => {
    const categories = ['Фрукты', 'Овощи', 'Мясо', 'Рыба']; 

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
    return (
        <div className='categoryPhoto'>
            <label  className="categoryLabel">Категория: </label>
            <select id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Выберите категорию</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
        </div>
    )
}

export default CategoryPhoto;