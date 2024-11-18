import { NavLink, useNavigate } from "react-router-dom";
import { getAllCart, clearCart, removeCart } from "./localStorage";
import { FaSort, FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const Cart = () => {
  const [sortedCart, setSortedCart] = useState(getAllCart());
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
      setSortedCart(sorted);
    }
  };

  useEffect(() => {
    const cost = sortedCart.reduce((acc, item) => acc + item.price, 0);
    setTotalCost(cost);
  }, [sortedCart]);

  const handlePurchase = () => {
    clearCart();
    setSortedCart([]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleRemoveItem = (id) => {
    removeCart(id);
    const updatedCart = sortedCart.filter((item) => item.id !== id);
    setSortedCart(updatedCart);
  };

  return (
    <div className="relative">
      <div className="flex justify-between p-5">
        <h2 className="font-bold">Cart</h2>
        <div className="flex gap-2 items-center">
          <h1 className="font-bold">Total Cost: ${totalCost.toFixed(2)}</h1>
          <div>
            <NavLink
              onClick={() => handleSort("price")}
              className="btn btn-success"
            >
              Sort by Price <FaSort />
            </NavLink>
            <button onClick={handlePurchase} className="btn btn-success ml-2">
              Purchase Product
            </button>
          </div>
        </div>
      </div>

      {sortedCart.length === 0 ? (
        <h1 className="flex justify-center font-bold text-3xl">
          Your cart is empty.
        </h1>
      ) : (
        <div className="mb-4 flex flex-wrap gap-8 justify-center">
          {sortedCart.map((item) => (
            <div key={item.id} className="w-[300px] h-full">
              <div className="card bg-base-100 shadow-xl mb-4">
                <figure className="px-10 pt-10">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.product_title}</h2>
                  <p>${item.price}</p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="btn btn-warning"
                  >
                    Remove Item <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Purchase Successful!</h2>
            <p className="mb-4">Thank you for your purchase.</p>
            <button onClick={handleCloseModal} className="btn btn-primary mt-2">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
