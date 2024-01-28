import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Inputbox from "../Components/Inputbox";
import Btn from "../Components/Btn";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-500">
        <div className="w-1/4 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-center font-extrabold text-3xl">Sign In</h1>
          <p className="text-center text-lg mt-3 text-gray-500">
            Enter your credentials to access your account
          </p>
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
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign in"}
            />
          </div>
          <div className="mt-3">
            <p className="text-center font-semibold">
              Don't have an account? {""}
              <Link to="/" className="underline text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
