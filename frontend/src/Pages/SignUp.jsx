import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-500">
        <div className="w-1/4 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-center font-bold text-3xl">Sign Up</h1>
          <p className="text-center text-lg mt-3 text-gray-500">
            Enter your information to create an account
          </p>
          <hr className="mt-3" />

          <div className="mt-3">
            <label
              htmlFor="firstName"
              className="block text-base mb-2 font-semibold"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="border w-full text-base px-2 py-1 focus: outline-none focus:ring-0 focus:border-gray-600"
              placeholder="John"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="lastName"
              className="block text-base mb-2 font-semibold"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="border w-full text-base px-2 py-1 focus: outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Doe"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="email"
              className="block text-base mb-2 font-semibold"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="border w-full text-base px-2 py-1 focus: outline-none focus:ring-0 focus:border-gray-600"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="block text-base mb-2 font-semibold"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="border w-full text-base px-2 py-1 focus: outline-none focus:ring-0 focus:border-gray-600"
              placeholder=""
            />
          </div>
          <div className="mt-5">
            <button className="w-full bg-black text-white rounded-md h-10">
              Sign Up
            </button>
          </div>
          <div className="mt-3">
            <p className="text-center font-semibold">
              Already have an account? {""}
              <Link to="/signin" className="underline text-blue-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
