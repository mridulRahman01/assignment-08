import Banner from "../Components/Banner";

const Dashboard = () => {
  return (
    <div>
      <Banner
        title="Dashboard"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button className="btn btn-warning">Cart</button>
          <button className="btn btn-warning">Wishlist</button>
        </div>
      </Banner>
    </div>
  );
};

export default Dashboard;
