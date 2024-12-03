import React from "react";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";
import LoginForm from "../Components/core/Login/LoginForm";

const LoginPage = () => {
    return (
        <>
            <Navbar />
            <LoginForm />
            <Footer />
        </>
    );
};

export default LoginPage;
