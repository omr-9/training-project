import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();

  // Find the product based on the ID from the URL
  const item = products.find((i) => i.id === id);

  return (
    <div className="container">
      {item ? (
        <div className="py-10 flex flex-col sm:flex-row justify-around items-center shadow-xl rounded-lg mt-20 px-4">
          <img className="w-20 sm:w-auto" src={item.img} alt={item.name} />
          <div className="text-center space-y-5">
            <h1 className="font-bold text-xl sm:text-4xl mt-5">{item.name}</h1>
            <p className="text-sm sm:text-base text-gray-500">{item.desc}</p>
            <p className="text-base sm:text-xl">Price: ${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-gradient-to-r from-blue-600 to-blue-800 py-1 px-3 mt-2 rounded-lg text-white text-xl hover:scale-105 duration-200"
            >
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-red-500">Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
