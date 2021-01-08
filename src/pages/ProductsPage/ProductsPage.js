import React from 'react';
import Navbar from '../../components/Navbar';
import ProductList from '../../containers/ProductList';
import './ProductsPage.css';

function ProductsPage({ onAddToCart }) {
  return (
    <div className="ProductsPage">
      <Navbar />
      <ProductList onAddToCart={onAddToCart} />
    </div>
  );
}

export default ProductsPage;
