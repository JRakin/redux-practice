import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = () => {
  const products = [
    { name: 'Lenevo Laptop', id: '1' },
    { name: 'Asus Laptop', id: '2' },
    { name: 'Hp Laptop', id: '3' },
    { name: 'Acer Laptop', id: '4' },
    { name: 'Macbook', id: '5' },
  ];
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Shopping center</h2>
      {products.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
