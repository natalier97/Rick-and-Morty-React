import React from "react";
import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {

  
  return (
    <>
    <NavBar />
    <h2>---------------</h2>
      <Outlet />
    </>
  );
}

export default App;
