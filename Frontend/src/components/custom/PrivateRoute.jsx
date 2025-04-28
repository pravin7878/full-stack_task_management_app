import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  
  const {token} = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child component
  return children;
};

export default PrivateRoute;