import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  // Navigate to product details page
  const handleProduct = (product) => {
    navigate(`/ProductDetails/${product.id}`);
  };

  return (
    <div className="border rounded-md border-gray-200 shadow-lg flex items-center justify-center flex-col p-5">
      <img
        src={product.img}
        alt={product.name}
       
      />
      <h4 className="font-semibold text-lg my-2 p-1">{product.name}</h4>
      <p className="text-lg">${product.price}</p>
     
     <div className=" mt-4 flex justify-between w-full items-center">

        <button
          onClick={() => handleProduct(product)}
          className="bg-gradient-to-r from-blue-600 to-blue-800 py-1 px-3 mt-2 rounded-lg text-white text-xl hover:scale-105 duration-200"
        >
          View
        </button>
        <button
          onClick={() => addToCart(product)}
          className="bg-gradient-to-r from-blue-600 to-blue-800 py-1 px-3 mt-2 rounded-lg text-white text-xl hover:scale-105 duration-200"
        >
          Add to cart
        </button>
     </div>
    </div>
  );
};

export default ProductCard;
