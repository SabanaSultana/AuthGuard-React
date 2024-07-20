import React from "react";
import { Navigate } from "react-router-dom";

const authGuard = () => {
  const jwtToken = sessionStorage.getItem("Token");
  return jwtToken ? true : false;
};

const protectRoute = ({ element }) => {
  return authGuard() ? element : <Navigate to="/" />;
};

export default protectRoute;
