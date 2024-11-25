// Created by: Surya Prakash N - 8924019

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../public/css/navbar.css";
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
        background: "#2c3e50", // Matching footer color
        padding: "10px 20px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left: Logo */}
      <div className="homeAndTrial" style={{ fontWeight: "bold", fontSize: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <img src="/favicon.png" class="pr-2"></img>
          HONEYBOOK
        </Link>
      </div>

      {/* Right: Links and Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <ul class="ulClass"
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
              style={{
                color: "white",
                textDecoration: "none",
                position: "relative",
                fontWeight: "bold",
              }}
            >
              Features
              <i
                className="pl-2 fa fa-caret-down"
                aria-hidden="true"
                style={{ marginLeft: "5px" }}
              ></i>
            </Link>
            {featuresDropdown && (
              <div
                className="dropitem"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#34495e", // Slightly lighter than the navbar background
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
                      e.currentTarget.style.background = "#2c3e50"; // Darker on hover
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
            <div
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Resources
              <i
                className="pl-2 fa fa-caret-down"
                aria-hidden="true"
                style={{ marginLeft: "5px" }}
              ></i>
            </div>
            {resourcesDropdown && (
              <div
                className="dropitemResources"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#34495e", // Slightly lighter than the navbar background
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
                      e.currentTarget.style.background = "#2c3e50"; // Darker on hover
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
              style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
            >
              Templates
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
            >
              Help
            </Link>
          </li>
        </ul>

        {/* Call-to-action Button */}
        <div>
          <Link id="trialButtonDesktop"
            to="/signup"
            style={{
              backgroundColor: "#ff9800",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f57c00")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ff9800")}
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
