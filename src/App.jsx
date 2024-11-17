import { useState } from "react";
import ProductDetails from "./ProductDetails"; // Import your ProductDetails component
import Cart from "./Cart"; // Import your Cart component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(
      (item) => item.product_title === product.product_title
    );

    if (!exists) {
      setCart((prevCart) => [...prevCart, product]);
      toast.success("Product added to cart!");
    } else {
      toast.info("Product already in cart!");
    }
  };

  const removeFromCart = (productTitle) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product_title !== productTitle)
    );
    toast.error("Product removed successfully!");
  };

  return (
    <div>
      <ProductDetails addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <ToastContainer />
    </div>
  );
};

export default App;
