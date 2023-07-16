import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../Home/Home"));
const About = lazy(() => import("../About/About"));
const Register = lazy(() => import("../Register/Register"));
const Donor = lazy(() => import("../Donor/Donor"));

const CommonRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}>
          <Route exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/donor" exact element={<Donor />} />
        </Route>
      </Routes>
    </>
  );
};

export default CommonRoutes;
