// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ErrorPage from "./pages/error";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

const App: React.FC = () => {
  const status = useSelector((state: RootState) => state.auth.isAuthenticated)
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          status? <HomePage/>: <Signup />} />
        <Route path="/login" element={
          status? <HomePage/>: <Login />}/>
        <Route path="/home" element={
          status? <HomePage/>: <Login />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
