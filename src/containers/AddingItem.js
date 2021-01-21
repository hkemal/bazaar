import React, { useState, useEffect } from 'react';

const AddingItem = ({ onAddToCart, cart }) => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    let res;
    res = await window.fetch('/api/get-all-product');
    const resJson = await res.json();
    setProducts(resJson);
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="5">Products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>Product Id</span></td>
            <td><span>Product Name</span></td>
            <td><span>Category</span></td>
            <td><span>Price</span></td>
            <td><span>Picture</span></td>
          </tr>
        </tbody>
        {products.map((item, i) => (

          <tbody>
            <tr>
              <td><span>{item.id}</span></td>
              <td><span>{item.productName}</span></td>
              <td><span>{item.category} </span></td>
              <td><span>{item.price}</span></td>
              <td>
                {<img width="40px" src={item.pictureUrl} alt="#" />}
              </td>
            </tr>
          </tbody>

        ))}
      </table>

    </div>
  );
}
export default AddingItem;

