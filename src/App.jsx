import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUP from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Payment from './Pages/Payment'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUP />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default App;
