import React from "react";
import { useForm } from "react-hook-form";
import bg from "../assets/images/bannerbackground.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const { register, handleSubmit, errors, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    reset();
  };

  if (user) {
    navigate("/");
  }
  return (
    <div
      class="hero min-h-screen bg-base-200"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div class="divider">OR</div>
          <button class="btn btn-wide">Wide</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
