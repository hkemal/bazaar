import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../components/Products/Products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(async () => {
    let res;
    if (category) {
      res = await window.fetch(`/api/get-by-product-category/${category}`);
    } else {
      res = await window.fetch('/api/get-all-product');
    }
    const resJson = await res.json();
    setProducts(resJson);
  }, [category]);
  return (
    <div>
      <Products items={products} />
    </div>
  );
}
export default ProductList;

