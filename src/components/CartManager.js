import React, { useState } from 'react';
import Cart from './Cart';

function CartManager({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => {
      const item = prevItems.find(item => item.id === productId);
      if (item.quantity > 1) {
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevItems.filter(item => item.id !== productId);
    });
  };

  return (
    <div>
      {children ? children({ handleAddToCart }) : <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />}
    </div>
  );
}

export default CartManager;
