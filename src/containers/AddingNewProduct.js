import React from 'react';

const AddingNewProduct = (props) => {
  let postNewProduct = (productData) => {
    let baseUrl = '/api/product-create';
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .catch(error => {
        alert('Product information is wrong!');
      });
  };


  if (!props.newProduct) return null;
  else {
    postNewProduct(props.newProduct);
  }

  return (
    <div>
      {/* <button onClick={() => postNewProduct(props.newProduct)}>POST</button> */}
    </div>
  );
}
export default AddingNewProduct;

