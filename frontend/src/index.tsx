import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/Search/Search";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/siginin" element={<SignIn />} />
      <Route path="/searchpage" element={<SearchPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
