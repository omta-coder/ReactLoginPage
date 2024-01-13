import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-800 text-white flex pt-3 justify-center">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={ <Register/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
