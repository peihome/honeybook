import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../public/css/navbar.css';
import {
  faClipboardCheck,
  faFileInvoice,
  faCreditCard,
  faFileSignature,
  faClock,
  faCog,
  faRobot,
  faChartLine,
  faMoneyCheckAlt,
  faSearch,
  faPodcast,
  faQuestionCircle,
  faBlog,
  faChalkboardTeacher,
  faFolderOpen,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);

  const features = [
    {
      icon: faClipboardCheck,
      title: "Features overview",
      description: "Powerful features built for small businesses.",
    },
    {
      icon: faFileSignature,
      title: "Online contracts",
      description: "Customizable contracts that look professional.",
    },
    {
      icon: faFileInvoice,
      title: "Online invoices",
      description: "Professional invoices that get you paid fast.",
    },
    {
      icon: faCreditCard,
      title: "Online payments",
      description: "Make it easy for clients to pay you with online payments.",
    },
    {
      icon: faFileInvoice,
      title: "Online proposals",
      description:
        "Easily book clients by combining an invoice, contract, and payment page.",
    },
    {
      icon: faClock,
      title: "Online scheduling",
      description: "Skip the back-and-forth and book meetings 2x faster.",
    },
    {
      icon: faCog,
      title: "Automations",
      description: "Put tasks, emails, files, and follow-up on autopilot.",
    },
    {
      icon: faRobot,
      title: "HoneyBook AI",
      description: "Gain insight, boost productivity, and increase revenue.",
    },
    {
      icon: faMoneyCheckAlt,
      title: "HoneyBook Finance",
      description:
        "Monitor cashflow, track spending, automate savings, and more.",
    },
  ];

  const resources = [
    {
      icon: faSearch,
      title: "Pros Marketplace",
      description: "Find experts to help grow your business.",
    },
    {
      icon: faPodcast,
      title: "Independent Business podcast",
      description: "Join us as we break down the science of self-made success.",
    },
    {
      icon: faQuestionCircle,
      title: "Help Center",
      description: "Answers and guidance on how to use HoneyBook.",
    },
    {
      icon: faBlog,
      title: "HoneyBook blog",
      description: "Helpful articles and industry tips for independents.",
    },
    {
      icon: faChalkboardTeacher,
      title: "Live virtual classes",
      description: "Live and on-demand trainings hosted by experts.",
    },
    {
      icon: faFolderOpen,
      title: "Free file setup",
      description:
        "Let us turn your existing files into ready-to-use client-facing templates.",
    },
  ];

  return (
    <nav
      style={{
        background: "#333",
        padding: "10px 20px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left: Logo */}
      <div class="homeAndTrial" style={{ fontWeight: "bold", fontSize: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          HONEYBOOK
        </Link>
      </div>

      {/* Right: Links and Button */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            margin: 0,
            padding: 0,
            gap: "20px",
            position: "relative",
          }}
        >
          {/* Features with Dropdown */}
          <li
            style={{ position: "relative" }}
            onMouseEnter={() => setFeaturesDropdown(true)}
            onMouseLeave={() => setFeaturesDropdown(false)}
          >
            <Link
              to="/features"
              style={{ color: "white", textDecoration: "none" }}
            >
              Features
              <i class="pl-2 fa fa-caret-down" aria-hidden="true"></i>
            </Link>
            {featuresDropdown && (
              <div class="dropitem"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#444",
                  padding: "20px",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  width: "600px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "20px",
                  zIndex: 1000,
                }}
              >
                {features.map((item, index) => (
                  <Link
                    to="/features"
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                      transition: "background 0.3s, transform 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#555";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      style={{ marginBottom: "10px", color: "#ff9800" }}
                    />
                    <strong style={{ marginBottom: "5px" }}>
                      {item.title}
                    </strong>
                    <p style={{ fontSize: "14px", color: "#ddd" }}>
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Resources with Dropdown */}
          <li
            style={{ position: "relative" }}
            onMouseEnter={() => setResourcesDropdown(true)}
            onMouseLeave={() => setResourcesDropdown(false)}
          >
            <Link
              to="/resources"
              style={{ color: "white", textDecoration: "none" }}
            >
              Resources
              <i class="pl-2 fa fa-caret-down" aria-hidden="true"></i>
            </Link>
            {resourcesDropdown && (
              <div class="dropitemResources"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#444",
                  padding: "20px",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  width: "500px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "20px",
                  zIndex: 1000,
                }}
              >
                {resources.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                      transition: "background 0.3s, transform 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#555";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      style={{ marginBottom: "10px", color: "#ff9800" }}
                    />
                    <strong style={{ marginBottom: "5px" }}>
                      {item.title}
                    </strong>
                    <p style={{ fontSize: "14px", color: "#ddd" }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </li>

          {/* Other Links */}
          <li>
            <Link
              to="/templates"
              style={{ color: "white", textDecoration: "none" }}
            >
              Templates
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              style={{ color: "white", textDecoration: "none" }}
            >
              Help
            </Link>
          </li>
        </ul>

        {/* Start Free Trial Button */}
        <button id="trialButtonDesktop"
          style={{
            background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          Start Free Trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
