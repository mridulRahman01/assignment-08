import { useState } from "react";
import {
  getAllWishlist,
  moveToCartFromWishlist,
  removeFromWishlist,
} from "./localStorage";
import toast from "react-hot-toast";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(getAllWishlist());
  const [removingProductId, setRemovingProductId] = useState(null);

  const handleAddToCart = (id) => {
    moveToCartFromWishlist(id);
    setWishlist(getAllWishlist()); // Update the wishlist after moving to cart
  };

  const handleRemoveFromWishlist = (id) => {
    setRemovingProductId(id); // Set the ID of the product being removed
    setTimeout(() => {
      removeFromWishlist(id);
      setWishlist(getAllWishlist()); // Update the wishlist after removal
      setRemovingProductId(null); // Clear the removing ID
    }, 1000); // Simulate a delay for better user feedback
    toast.success("Removing product...");
  };

  return (
    <div className="mb-4 flex flex-wrap gap-8 justify-center">
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className={`w-[300px] h-[500px] ${
              removingProductId === item.id ? "opacity-50" : ""
            }`} // Reduce opacity for visual feedback
          >
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
                  onClick={() => handleAddToCart(item.id)}
                  className="btn btn-secondary"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="btn btn-warning ml-2"
                  disabled={removingProductId === item.id} // Disable button while removing
                >
                  {removingProductId === item.id ? "Removing..." : "Remove"}
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
