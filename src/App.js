import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CommonRoutes from "./components/Route/CommonRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <CommonRoutes />
      </Suspense>
    </>
  );
}

export default App;
