import React from "react";
import { useForm } from "react-hook-form";
import bg from "../assets/images/bannerbackground.png";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo2.png";
import Loading from "../component/Loading";
import icon from "../assets/images/google.png";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let errorElement;

  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const { register, handleSubmit, errors, reset } = useForm();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <Loading />;
  }
  if (error) {
    errorElement = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    reset();
  };
  return (
    <div
      class="hero min-h-screen bg-base-200 mt-4"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "",

        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="card flex-shrink-0 w-full max-w-sm ">
        <div class="card-body mt-[55px]">
          <img src={logo} width="200px" className="mb-6" alt="" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <input
                {...register("email")}
                placeholder="Email"
                required
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D] mb-3"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                required
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D]"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-red-700 ">{errorElement}</p>

            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn text-white bg-[#E51A4B] hover:bg-[#F5F5F5] hover:text-black"
              >
                Login
              </button>
            </div>
            <p>
              Don't have an account?{" "}
              <span
                className="text-red-700 cursor-pointer ml-1"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
          </form>
          <div class="divider">OR</div>
          <button
            class="py-3 bg-base-200 border-2 flex justify-center items-center rounded-md"
            onClick={() => signInWithGoogle()}
          >
            Contiune With Google{" "}
            <span>
              <img src={icon} className="w-7 ml-2" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
