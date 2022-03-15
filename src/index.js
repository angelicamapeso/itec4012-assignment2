import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./normalize.css";
import "./fonts.scss";
import "./index.scss";

import TopBanner from "./components/TopBanner";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopBanner />
      <MainNav />
      {/* <App /> */}
      <main>
        <div id="grid">
          <div id="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
