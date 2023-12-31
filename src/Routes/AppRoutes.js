import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import PrivateRoute from "../Routes/PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import ScrumComponent from "../Pages/ScrumComponent";
import UseState from "../Components/Hooks/UseState";
export default class AppRoutes extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scrum" element={<ScrumComponent />} />
            <Route path="/hooks" element={<UseState />} />
          </Route>
        </Routes>
      </>
    );
  }
}
