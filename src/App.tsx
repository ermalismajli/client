import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Patients from "./Patients";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/patients1" element={<Patients />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
