import React from 'react';

const Product = (props) => {
  return (
    <div>
      <h5>{props.product.name}</h5>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
