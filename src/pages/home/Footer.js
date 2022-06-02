import React from "react";

import logo from "../../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black mt-10">
      <div className=" grid  lg:grid-cols-4 md:grid-cols-2 px-10 p-10 text-white">
        <div>
          <img src={logo} className="w-36" alt="" />
        </div>
        <div className="list-none">
          <h1 className="font-bold uppercase mb-3">Get Started</h1>
          <li>
            <a href="#" className="hover:tracking-[.30em] duration-1000">
              About Online Food
            </a>
          </li>
          <li>
            <a href="#" className="hover:tracking-[.30em] duration-1000">
              Read Our Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:tracking-[.30em] duration-1000">
              Add Your Restaurant
            </a>
          </li>
        </div>
        <div className="list-none md:mt-4">
          <h1 className="font-bold uppercase mb-3">Support</h1>
          <li>
            <a href="#" className="hover:tracking-[.30em] duration-1000">
              Get Help
            </a>
          </li>
          <li>
            <a href="#" className="hover:tracking-[.30em] duration-1000">
              Read FAQs
            </a>
          </li>
          <li>
            <a href="#" className="hover:tracking-[.30em] duration-1000">
              View All clients
            </a>
          </li>
          <li>
            <a href="#" className="hover:tracking-[.30em] duration-1000">
              Restaurant Near Me
            </a>
          </li>
        </div>
        <div className=" md:mt-4">
          <h1 className="font-bold uppercase mb-3">Fllow Us</h1>
          <div className="list-none flex">
            <li className="p-2 text-[#0D8AF0] text-3xl ">
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li className="p-2 text-[#1DA1F2] text-3xl ">
              <a href="">
                <BsTwitter />
              </a>
            </li>
            <li className="p-2 text-red-500 text-3xl">
              <a href="">
                <FaInstagram />
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
