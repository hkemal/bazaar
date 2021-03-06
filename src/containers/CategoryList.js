import React, {useState, useEffect } from 'react';
import Categories from '../components/Categories/Categories';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    let category;
    category = await window.fetch(`/api/get-by-product-all-category`);
    const categoryJson = await category.json();
    setCategories(categoryJson);
  }, []);

  return (
    <Categories items={categories} />
  );
}
export default CategoryList;