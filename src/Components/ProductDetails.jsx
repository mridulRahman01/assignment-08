/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Banner from "./Banner";

const ProductDetails = () => {
  const data = useLoaderData();
  const { product_title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = data.find((p) => p.product_title === product_title);
    setProduct(selectedProduct);
  }, [product_title, data]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Banner
        title="Product Details"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Banner>
      <div className="hero bg-white w-[1200px] h-[500px] relative mt-[-250px] ml-[130px] rounded-lg ">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src={product.product_image}
            className="w-[350px] h-[400px] rounded-lg shadow-2xl bg-contain"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4">{product.product_title}</h1>
            <h3 className="font-bold mb-2">Price:${product.price}</h3>
            <h3 className="font-bold mb-2">Specifications:</h3>
            <ul>
              {product.Specification.map((spec, index) => (
                <li className="mb-2" key={index}>
                  {spec}
                </li>
              ))}
            </ul>
            <div>
              <p className="font-bold mb-2">Rating: {product.rating} ⭐</p>
              <button
                onClick={() => handle(data)}
                className="btn btn-secondary"
              >
                Add to Cart <FaShoppingCart />
              </button>
              <button className="btn ml-2">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
