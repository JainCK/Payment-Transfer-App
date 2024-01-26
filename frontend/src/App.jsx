import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Transfer from "./Pages/Transfer";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
