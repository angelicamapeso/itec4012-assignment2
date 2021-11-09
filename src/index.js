import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "./fonts.scss";

import TopBanner from "./components/TopBanner";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopBanner />
      <MainNav />
      {/* <App /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
