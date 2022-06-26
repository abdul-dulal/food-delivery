import React from "react";
import blog1 from "../../assets/images/adult-blur-blurred-background-687824.png";
import blog2 from "../../assets/images/chef-cook-food-33614.png";
import blog3 from "../../assets/images/architecture-building-city-2047397.png";
import icon1 from "../../assets/images/icons/Group 204.png";
import icon2 from "../../assets/images/icons/Group 1133.png";
import icon3 from "../../assets/images/icons/Group 245.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Testmonial = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-2xl font-bold"> Why Your Chose Us</h1>
        <span className="h-2 bg-red-700 w-9"></span>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
          Quidem, amet?
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-5 px-5 lg:px-12  ">
        <div class="card card-compact mx-w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={blog1} width="100%" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div className="flex">
              <div>
                <img src={icon1} className="w-full" alt="" />
              </div>
              <div className="ml-6">
                <h1 class="card-title">Fast Delivery</h1>

                <p>
                  keep your system in sync with automated web hooks based
                  notification each time link is paid and how we dream about our
                  future
                </p>
                <div className="flex mt-3">
                  <Link to={"/blog"} className="text-green-700 font-bold mt-1">
                    see more
                  </Link>
                  <span className="ml-3 mt-1 bg-red-700 rounded-full text-white p-1">
                    <AiOutlineArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-compact mx-w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={blog2} width="100%" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div className="flex">
              <div>
                <img src={icon2} className="w-24" alt="" />
              </div>
              <div className="ml-6">
                <h1 class="card-title">Fast Delivery</h1>

                <p>
                  keep your system in sync with automated web hooks based
                  notification each time link is paid and how we dream about our
                  future
                </p>
                <div className="flex mt-3">
                  <Link to={"/blog"} className="text-green-700 font-bold mt-1">
                    see more
                  </Link>
                  <span className="ml-3 mt-1 bg-red-700 rounded-full text-white p-1">
                    <AiOutlineArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-compact mx-w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={blog3} width="100%" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div className="flex">
              <div>
                <img src={icon3} className="w-24" alt="" />
              </div>
              <div className="ml-6">
                <h1 class="card-title">Fast Delivery</h1>

                <p>
                  keep your system in sync with automated web hooks based
                  notification each time link is paid and how we dream about our
                  future
                </p>
                <div className="flex mt-3">
                  <Link to={"/blog"} className="text-green-700 font-bold mt-1">
                    see more
                  </Link>
                  <span className="ml-3 mt-1 bg-red-700 rounded-full text-white p-1">
                    <AiOutlineArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
