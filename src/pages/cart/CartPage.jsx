import React from 'react';
import emptyCart from '../../assets/empty-cart.png';

const CartPage = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container py-2 text-center">
      {cart.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold my-8">Your Cart</h1>
          <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((item) => (
              <div key={item.id} className="shadow-lg rounded-lg p-4 flex flex-col items-center mx-2">
                <img className="w-24 mb-4" src={item.img} alt={item.name} />
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-base">Price of one: ${item.price}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span
                    className="bg-gray-300 py-1 px-2 cursor-pointer rounded-full"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </span>
                  <p>Quantity: {item.quantity}</p>
                  <span
                    className="bg-gray-300 py-1 px-2 cursor-pointer rounded-full"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </span>
                </div>
                <p className="text-base mt-2">Total Price: ${item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-gradient-to-r from-red-600 to-red-800 py-1 px-3 mt-2 rounded-lg text-white text-xl hover:scale-105 duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="p-10 mt-10 mx-auto w-1/2 rounded-full bg-gray-100 shadow-xl">
            <h1 className="font-bold text-xl">Total price: ${calculateTotalPrice()}</h1>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img src={emptyCart} alt="Empty Cart" className="w-1/2 mb-4" />
        </div>
      )}
    </div>
  );
};

export default CartPage;
