import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Cards from "../Components/Cards";
import ProductDetails from "../Components/ProductDetails";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("../cat.json"),
          },
          {
            path: "/card/:card",
            element: <Cards></Cards>,
            loader: () => fetch("../cat.json"),
          },
        ],
      },
      {
        path: "/details/:product_title",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/cat.json"),
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
            loader: () => fetch("/cat.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
    ],
  },
]);
export default routes;
