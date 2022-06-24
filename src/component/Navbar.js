import React from "react";
import logo from "../assets/images/logo2.png";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import Loading from "./Loading";
const Navbar = ({ children }) => {
  const [cart] = useCart();

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div className="">
      <div class="drawer ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div class="w-full navbar bg-base-100">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">
              <Link to="/">
                <img src={logo} className="h-9" w-9 alt="" />
              </Link>
            </div>
            <div class="flex-none hidden lg:block px-12   ">
              <ul class="menu menu-horizontal">
                <li>
                  <Link to="/cart">
                    <div class="indicator">
                      <span
                        class="indicator-item badge badge-secondary"
                        refetch
                      >
                        {cart?.length > 0 ? cart.length : "0"}
                      </span>
                      <span className="text-3xl   ">
                        <BsCartPlus />
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/login"> Login</Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className=" rounded-full px-8  bg-[#E51A4B] text-[18px] text-white"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li>
              <a>
                <BsCartPlus />
              </a>
            </li>
            <li>
              <Link to="/contact">Cotanct</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
