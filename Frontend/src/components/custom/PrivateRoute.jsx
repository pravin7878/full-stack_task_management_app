import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.token) {
    // If no token, redirect to login page
    return <Navigate to="/singin" />;
  }

  // If authenticated, render the child component
  return children;
};

export default PrivateRoute;