
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import PageNotFound from "../pages/PageNotFound"
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <>
            <Dashboard />
          </>
        }
      />

      <Route
        path="/profile"
        element={
          <>
            <Profile />
          </>
        }
      />

      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
};

export default AppRoutes;
