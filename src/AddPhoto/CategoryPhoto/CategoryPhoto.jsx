import React from "react";
import "./CategoryPhoto.css"
import { useState } from 'react';


const CategoryPhoto = ({ dataCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className='categoryPhoto'>
      <label className="categoryLabel">Категория: </label>
      <select id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Выберите категорию</option>
        {dataCategory && dataCategory.map((category) => (
          <option key={category.id} value={category.id}>{category.title}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryPhoto;