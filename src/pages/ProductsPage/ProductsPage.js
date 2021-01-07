import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import CategoryList from '../../containers/CategoryList';
import ProductList from '../../containers/ProductList';
import './ProductsPage.css';

function ProductsPage({ onAddToCart }) {
  return (
    <div className="ProductsPage">
      <Navbar />
      <ProductList onAddToCart={onAddToCart} />
      <CategoryList />
    </div>
  );
}

export default ProductsPage;
