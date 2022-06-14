import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo2.png";
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const { register, handleSubmit, errors, reset } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    reset();
  };
  const google = () => {
    signInWithGoogle();
    console.log("click");
  };

  if (user || gUser) {
    navigate("/");
  }
  if (loading || gLoading) {
    return <p>loading.....</p>;
  }
  return (
    <div
      class="hero min-h-screen  mt-4"
      style={{
        backgroundPosition: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="card flex-shrink-0 w-full max-w-sm  ">
        <div class="card-body">
          <img src={logo} width="200px" className="mb-6" alt="" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <input
                {...register("anme")}
                required
                placeholder="Name"
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D] mb-3"
              />
            </div>
            <div class="form-control">
              <input
                {...register("email")}
                placeholder="Email"
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D] mb-3"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D]"
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn text-white bg-[#E51A4B] hover:bg-[#F5F5F5] hover:text-black"
              >
                Login
              </button>
            </div>
          </form>
          <div class="divider">OR</div>
          <button class="btn btn-secondary" onClick={google}>
            Wide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
