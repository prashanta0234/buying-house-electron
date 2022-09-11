import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.svg";

const Login = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="min-w-[40vw] hidden lg:block bg-main h-[100vh] absolute left-0 z-10 opacity-50"></div>
        <div className="bg-gray-100 w-full h-[100vh] flex justify-center items-center ">
          <div className="bg-white w-[80%] mx-auto h-[80vh] rounded-lg drop-shadow-lg p-6">
            <Link
              className="font-medium hover:text-blue-500 hover:underline float-right"
              to="#"
            >
              Needs Help?
            </Link>

            <div className="flex justify-between  items-center h-[60vh]">
              <div className="w-1/2 z-30 hidden lg:block">
                <img className="h-[1000px]" src={logo} alt="" />
              </div>
              <div className="lg:w-1/2 w-full">
                <p className="text-5xl  mb-12 font-semibold text-center">
                  Log In
                </p>

                <form>
                  <div className="form-control w-full mb-6">
                    <label className="label">
                      <span className="label-text text-lg">Email Address</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="input input-bordered border-main w-full focus:outline-main"
                    />
                  </div>

                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text text-lg">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="Password"
                      className="input input-bordered border-main w-full focus:outline-main"
                    />
                  </div>
                  <Link
                    className="float-right mt-2 hover:text-blue-500 hover:underline"
                    to="#"
                  >
                    Forget Password
                  </Link>
                  <input
                    type="submit"
                    value="Submit"
                    className="input input-bordered w-full mt-12 btn btn-active btn-primary text-white font-medium text-lg capitalize"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
