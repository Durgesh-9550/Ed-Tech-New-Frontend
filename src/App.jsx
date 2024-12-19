import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUP from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Payment from './Pages/Payment'
import About from "./Pages/About";
import RefundPolicy from "./Pages/RefundPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import NotFound from "./Pages/NotFound";
import PaymentSuccess from "./Components/core/Payment/PaymentSuccess";
import PaymentFailure from "./Components/core/Payment/PaymentFailure";
import Contact from "./Pages/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUP />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-and-condition" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/payment/success" element={<PaymentSuccess />} />
      <Route path="/payment/failure" element={<PaymentFailure />} />
    </Routes>
  );
};

export default App;
