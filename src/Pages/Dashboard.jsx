import { Outlet, useNavigate } from "react-router-dom";
import Banner from "../Components/Banner";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Banner
        title="Dashboard"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={() => navigate(`cart`)} className="btn btn-warning">
            All Cart
          </button>
          <button
            onClick={() => navigate(`wishlist`)}
            className="btn btn-warning"
          >
            Wishlist
          </button>
        </div>
      </Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
