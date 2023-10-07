import React, { lazy, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import CheckAuth from "./app/auth";
import initializeApp from "./app/init";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/protected/Dashboard"));
const Welcome = lazy(() => import("./pages/protected/Welcome"));
const Containers = lazy(() => import("./pages/protected/Containers"));

// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = CheckAuth();

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {token ? (
            <>
              <Route path="/app/dashboard/:id" element={<Dashboard />} />
              <Route path="/app/welcome" element={<Welcome />} />
              <Route path="/app/containers" element={<Containers />} />
              <Route path="/app/*" element={<Layout />} />

              <Route path="*" element={<Welcome replace to="/app/welcome" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/register" element={<Register />} />
              <Route path="app/dashboard/:id" element={<Dashboard />} />

              {/* Place new routes over this */}
              <Route path="/app/*" element={<Layout />} />

              <Route
                path="*"
                element={
                  <Navigate to={token ? "/app/welcome" : "/login"} replace />
                }
              />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
