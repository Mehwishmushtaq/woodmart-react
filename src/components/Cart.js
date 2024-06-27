import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
