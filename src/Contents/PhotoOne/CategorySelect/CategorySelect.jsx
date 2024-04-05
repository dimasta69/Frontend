import React, { useState } from 'react';

const CategorySelect = ({ category_change, dataCategory, setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue)
  };


  return (
    <div className='category_select'>
      <select  value={selectedCategory} onChange={handleCategoryChange} id='category_id'>
        <option value="">{category_change}</option>
        {dataCategory.map(category => (
          category.title !== category_change && (
            <option key={category.id} value={category.id}>{category.title}</option>
          )
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;

