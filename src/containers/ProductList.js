import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../components/Products';

// class ProductList extends Component {
//   state = {
//     products: []
//   }

//   async componentDidMount() {
//     const res = await window.fetch('/api/get-all-product');
//     const products = await res.json();
//     this.setState({ products });
//   }

//   render() {
//     return (
//       <Products items={this.state.products} />
//     );
//   }
// }
// export default ProductList;

// ///////////////////


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
    console.log(resJson);
    setProducts(resJson);
  }, [category]);
  return (
    <div>
      <Products items={products} />
    </div>
  );
}
export default ProductList;

