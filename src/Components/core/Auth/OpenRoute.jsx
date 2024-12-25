import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

function OpenRoute({ children }) {
    const { isLoggedIn } = useContext(AuthContext);
  
    if (isLoggedIn) {
      return <Navigate to="/dashboard" />;
    } else {
      return children;
    }
  }
  
  export default OpenRoute;
  
