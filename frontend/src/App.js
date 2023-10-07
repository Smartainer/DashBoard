import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { themeChange } from "theme-change";
import CheckAuth from "./app/auth";
import initializeApp from "./app/init";
import Layout from "./containers/Layout";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Dashboard from "./pages/protected/Dashboard";
import Welcome from "./pages/protected/Welcome";
import Containers from "./pages/protected/Containers";

// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = CheckAuth();

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);
  console.log("token: ");
  console.log(token);

  return (
    <>
      <Router>
        {token && <Layout />}
        <Routes>
          {token ? (
            <>
              <Route exact path="/app/dashboard/:id" element={<Dashboard />} />
              <Route exact path="/app/welcome" element={<Welcome />} />
              <Route exact path="/app/containers" element={<Containers />} />
              <Route
                exact
                path="*"
                element={<Welcome replace to="/app/welcome" />}
              />
            </>
          ) : (
            <>
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/forgot-password"
                element={<ForgotPassword />}
              />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/app/dashboard/:id" element={<Dashboard />} />
              <Route exact path="*" element={<Login replace to="/login" />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
