import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Inputbox from "../Components/Inputbox";
import Btn from "../Components/Btn";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-500">
        <div className="w-1/4 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-center font-bold text-3xl">Sign Up</h1>
          <p className="text-center text-lg mt-3 text-gray-500">
            Enter your information to create an account
          </p>
          <Inputbox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <Inputbox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Doe"
            label={"Last Name"}
          />
          <Inputbox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="johndoe@gmail.com"
            label={"Email"}
          />
          <Inputbox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="*****"
            label={"Password"}
          />
          <div className="mt-5">
            <Btn
              label={"Sign Up"}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
            />
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
