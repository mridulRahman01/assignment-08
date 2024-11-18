import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardCat = ({ cat }) => {
  const navigate = useNavigate();

  const {
    product_title,
    product_image,

    price,
  } = cat || {};

  return (
    <section className="flex relative ">
      <div className="card bg-base-100 w-96 shadow-xl gap-6 my-4">
        <figure className="px-10 pt-10">
          <img src={product_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>

          <p>Price:{price}K</p>
          <div className="card-actions">
            <button
              onClick={() =>
                navigate(`/details/${encodeURIComponent(product_title)}`)
              }
              className="btn btn-primary"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardCat;
