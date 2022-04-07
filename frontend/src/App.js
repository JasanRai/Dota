import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Heroes from "./Pages/Heroes";
import Items from "./Pages/Items";
import { CssBaseline } from "@mui/material";
import CustomBuild from "./Pages/CustomBuild";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
// import { AuthProvider } from "./Components/Auth";
import { RequireAuth } from "./Components/RequireAuth";

function App() {
  return (
    <>
      {" "}
      {/*any component that use auth context needs to wrapped in context provider */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/heroes"
          element={
            <RequireAuth>
              <Heroes />
            </RequireAuth>
          }
        />
        <Route path="/items" element={<Items />} />
        <Route path="/custom" element={<CustomBuild />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
