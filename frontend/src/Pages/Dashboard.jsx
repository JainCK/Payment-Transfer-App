import React from "react";
import Header from "../Components/Header";
import Balance from "../Components/Balance";
import Users from "../Components/User";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <Balance />
      <Users />
    </div>
  );
};

export default Dashboard;
