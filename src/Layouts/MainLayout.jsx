import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./../Components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster></Toaster>
      {/* {Navbar} */}
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-334px)] py-12 container mx-auto px-12 ">
        <Outlet></Outlet>
      </div>
      {/* {Footer} */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
