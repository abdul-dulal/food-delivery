import React from "react";
import logo from "../assets/images/logo2.png";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import Loading from "./Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import LogOut from "./LogOut";
const Navbar = ({ children }) => {
  const { cart, refetch } = useCart();
  const [user] = useAuthState(auth);
  console.log(cart);
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
                      <span class="indicator-item badge badge-secondary">
                        {cart?.length > 0 ? cart.length : "0"}
                      </span>
                      <span className="text-3xl   ">
                        <BsCartPlus />
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="px-5">
                  {user ? <LogOut /> : <Link to="/login"> Login</Link>}
                </li>
                <li className="">
                  {user ? (
                    <Link to="/my-order">
                      <span>{user?.displayName}</span>{" "}
                    </Link>
                  ) : (
                    <Link
                      to="/signup"
                      className=" rounded-full py-0 px-7 p-0  bg-[#E51A4B] text-[18px] text-white"
                    >
                      Sign up
                    </Link>
                  )}
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
              <Link to="/cart">
                <div class="indicator">
                  <span class="indicator-item badge badge-secondary" refetch>
                    {cart?.length > 0 ? cart.length : "0"}
                  </span>
                  <span className="text-3xl   ">
                    <BsCartPlus />
                  </span>
                </div>
              </Link>
            </li>
            <li className="px-5">
              {user ? <LogOut /> : <Link to="/login"> Login</Link>}
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
    </div>
  );
};

export default Navbar;
