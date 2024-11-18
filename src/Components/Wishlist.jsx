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
    setWishlist(getAllWishlist());
  };

  const handleRemoveFromWishlist = (id) => {
    setRemovingProductId(id);
    setTimeout(() => {
      removeFromWishlist(id);
      setWishlist(getAllWishlist());
      setRemovingProductId(null);
    }, 1000);
    toast.success("Removing product...");
  };

  return (
    <section>
      <h1 className="font-bold mt-2">Wishlist</h1>
      <div className="mb-4 flex flex-wrap gap-8 justify-center">
        {wishlist.length === 0 ? (
          <h1 className="font-bold flex justify-center text-3xl mt-6">
            Your wishlist is empty.
          </h1>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className={`w-[300px] h-[500px] ${
                removingProductId === item.id ? "opacity-50" : ""
              }`}
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
    </section>
  );
};

export default Wishlist;
