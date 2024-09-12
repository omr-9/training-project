import Cart from "../../components/Cart";
const Home = ({ products, addToCart }) => {
  return (
    <div className="container">
      <div className="mb-20">
        <h1 className="py-4 font-bold text-xl text-center my-10 mx-auto">
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {products.map((product) => (
            <Cart key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
