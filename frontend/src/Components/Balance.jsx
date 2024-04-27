import axios from "axios";
import React, { useEffect, useState } from "react";

const Balance = () => {
  const [balance, setBalance] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBalance = async () => {
      axios
        .get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            setBalance(response.data.balance);
          },
          (error) => {
            console.error("Error fetching balance:", error);
          }
        );
    };

    fetchBalance();
  }, [token]);

  return (
    <>
    <div className="my-5 mx-auto px-4">
      <div className=" px-2 py-1 border rounded border-gray-200">
        <h2 className="font-semibold  text-md">
          Your Balance: {balance !== null ? balance : "Loading..."}
        </h2>
      </div>
      </div>
    </>
  );
};

export default Balance;
