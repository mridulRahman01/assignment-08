import toast from "react-hot-toast";

// Helper functions for Cart
const getAllCart = () => {
  const all = localStorage.getItem("cart");
  return all ? JSON.parse(all) : [];
};

const addToCart = (data) => {
  const cart = getAllCart();
  const isExist = cart.find((item) => item.id === data.id);
  if (isExist) return toast.error("This Product is Already in the Cart!");
  cart.push(data);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Product Added to Cart Successfully!");
};

const clearCart = () => {
  localStorage.removeItem("cart");
};

const removeCart = (id) => {
  const cart = getAllCart();
  const remaining = cart.filter((data) => data.id !== id);
  localStorage.setItem("cart", JSON.stringify(remaining));
  toast.success("Product Removed from Cart Successfully!");
};

// Helper functions for Wishlist
const getAllWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

const addToWishlist = (product) => {
  const wishlist = getAllWishlist();
  if (!wishlist.find((item) => item.id === product.id)) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Product Added to Wishlist Successfully!");
  } else {
    toast.error("This Product is Already in the Wishlist!");
  }
};

const removeFromWishlist = (id) => {
  const wishlist = getAllWishlist();
  const updatedWishlist = wishlist.filter((item) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  toast.success("Product Removed from Wishlist Successfully!");
};

// Function to move an item from Wishlist to Cart
const moveToCartFromWishlist = (id) => {
  const wishlist = getAllWishlist();
  const product = wishlist.find((item) => item.id === id);

  if (product) {
    // Add product to Cart
    addToCart(product);
    // Remove product from Wishlist
    removeFromWishlist(id);
  } else {
    toast.error("Product not found in Wishlist!");
  }
};

export {
  addToCart,
  getAllCart,
  clearCart,
  removeCart,
  getAllWishlist,
  addToWishlist,
  removeFromWishlist,
  moveToCartFromWishlist, // Export the new function
};
