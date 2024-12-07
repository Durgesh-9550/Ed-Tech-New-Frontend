import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUP from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Payment from './Pages/Payment'
import About from "./Pages/About";
import RefundPolicy from "./Pages/RefundPolicy";
import { TermsAndConditions } from "./Pages/TermsAndConditions";
import PrivacyPolicyMain from "./Components/core/PrivacyPolicyPage/PrivacyPolicyMain";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUP />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-and-condition" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyMain />} />
    </Routes>
  );
};

export default App;
