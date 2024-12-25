import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
  
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };
  
  export default PrivateRoute;
  
