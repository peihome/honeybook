import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import Help from "./pages/Help.jsx";
import Features from "./pages/Features.jsx";
import Templates from "./pages/Templates.jsx";

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div>
          <Navbar />
        </div>

        {/* Center section with body (replaces content based on route) */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/help" element={<Help />} />
            <Route path="/templates" element={<Templates />} />
          </Routes>
        </div>

        {/* Bottom section with Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById("contents")).render(<App />);
