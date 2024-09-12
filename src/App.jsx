import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Cart from "./components/Cart";

import Iphone12 from "../src/assets/iphone-12.webp";
import Iphone13 from "../src/assets/iphone-13.webp";
import Iphone15 from "../src/assets/iphone-15.webp";
import mac from "../src/assets/mac.jpeg";
import mac2 from "../src/assets/mac2.jpeg";
import canon from "../src/assets/canoncamera.jpeg";
import camera from "../src/assets/camera1.jpeg";
import headphone from "../src/assets/sonyHeadphone.jpeg";
import airbods from "../src/assets/airbods.jpeg";
import ProductDetails from "./pages/productDetails/productDetails";
import CartPage from "./pages/cart/CartPage";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      id: "1",
      name: "IPhone 12",
      img: Iphone12,
      price: "515",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
    {
      id: "2",
      name: "IPhone 13",
      img: Iphone13,
      price: "615",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
    {
      id: "3",
      name: "IPhone 15",
      img: Iphone15,
      price: "715",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
    {
      id: "4",
      name: "Mac",
      img: mac,
      price: "815",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
    {
      id: "5",
      name: "Mac",
      img: mac2,
      price: "850",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
    {
      id: "6",
      name: "Canon",
      img: canon,
      price: "700",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
    {
      id: "7",
      name: "camera",
      img: camera,
      price: "750",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
    {
      id: "8",
      name: "Sony HeadPhone",
      img: headphone,
      price: "400",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
    {
      id: "9",
      name: "Airbods",
      img: airbods,
      price: "150",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quam?",
    },
  ];
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      alert("Item has been added to cart, Go to cart and see it");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const priceOfAll = (quantity, price) => {
    return Number(quantity) * Number(price);
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route
          path="/ProductDetails/:id"
          element={<ProductDetails products={products} addToCart={addToCart} />}
        />
        <Route
          path="/CartPage"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              priceOfAll={priceOfAll}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
