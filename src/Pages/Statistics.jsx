import { useEffect, useState } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import Banner from "../Components/Banner";

const ComposedChartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../cat.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section>
      <div>
        <Banner
          title="Statistics"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Banner>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ResponsiveContainer width="90%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ComposedChartPage;
