/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Category = ({ catagories }) => {
  return (
    <div role="tablist" className="tabs tabs-boxed  mt-4">
      {catagories?.map((category) => (
        <NavLink
          key={category.id}
          to={`/card/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active" : "hover:tab-active"}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
