import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Category from "../Components/Category";

const Home = () => {
  const catagories = useLoaderData();
  const navigate = useNavigate();

  return (
    <section>
      <div>
        <Banner
          title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        >
          {" "}
          <div className="flex justify-center items-center mb-6">
            <button
              onClick={() => navigate(`/dashboard`)}
              className="btn btn-accent"
            >
              Shop Now
            </button>
          </div>
        </Banner>

        <div>
          <Hero></Hero>
        </div>
        <div>
          <Category catagories={catagories}></Category>
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Home;
