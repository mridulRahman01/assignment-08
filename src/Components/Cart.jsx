import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/cat.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const addToCart = (productTitle) => {
    const product = products.find(
      (item) => item.product_title === productTitle
    );
    if (!product) {
      toast.error("Product not found!");
      return;
    }

    if (!cart.find((item) => item.product_title === productTitle)) {
      setCart([...cart, product]);
      toast.success(`${productTitle} added to cart!`);
    } else {
      toast.info("Product already in the cart!");
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    toast.success("Product removed from cart!");
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.product_title}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export { Cart };
