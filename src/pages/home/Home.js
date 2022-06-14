import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Slider from "./Slider";
import Testmonial from "./Testmonial";

const Home = () => {
  const activeLink = ({ isActive }) => {
    return {
      textDecoration: isActive ? " underline" : "none",
      hover: isActive ? "none" : undefined,
      color: isActive ? "red" : "black",
      background: isActive ? "none" : undefined,
    };
  };
  return (
    <>
      <div>
        <Slider />
        <div class="navbar ">
          <div class="flex-none block mx-auto">
            <ul class="menu menu-horizontal ">
              <li>
                <NavLink
                  to="breakfast"
                  style={activeLink}
                  className=" text-xl "
                >
                  Breackfast
                </NavLink>
              </li>
              <li>
                <NavLink to="/" style={activeLink} className=" text-xl ">
                  Lunch
                </NavLink>
              </li>
              <li>
                <NavLink to="dinner" style={activeLink} className=" text-xl ">
                  Dinner
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
      <Testmonial />
      <Footer />
    </>
  );
};

export default Home;
