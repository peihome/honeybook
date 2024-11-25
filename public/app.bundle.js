/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./jsx/App.jsx":
/*!*********************!*\
  !*** ./jsx/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar.jsx */ "./jsx/components/Navbar.jsx");
/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer.jsx */ "./jsx/components/Footer.jsx");
/* harmony import */ var _pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/HomePage.jsx */ "./jsx/pages/HomePage.jsx");
/* harmony import */ var _pages_Help_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Help.jsx */ "./jsx/pages/Help.jsx");
/* harmony import */ var _pages_Feature_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Feature.jsx */ "./jsx/pages/Feature.jsx");
/* harmony import */ var _pages_Templates_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Templates.jsx */ "./jsx/pages/Templates.jsx");










var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: 1,
      padding: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/features",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Feature_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/help",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Help_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/templates",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Templates_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("contents")).render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ "./jsx/components/Footer.jsx":
/*!***********************************!*\
  !*** ./jsx/components/Footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-column-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "HONEYBOOK")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-column-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Features overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Online contracts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Online signature generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Online document signing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Online invoices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Online payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Payment reminders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Online proposals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Online scheduling"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "HoneyBook Finance"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Live chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Help Center"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "HoneyBook Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Live virtual classes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "HoneyBook business academy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Independent Business podcast"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Pros Marketplace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Free file setup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Sitemap"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Free tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Contract templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Invoice templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Invoice generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Self-employment tax calculator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Email signature generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Mission statement generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Business personality test"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "HoneyBook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Careers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Press"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Company news"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Educator program"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Referral program"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Terms & privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Subpoena policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Your privacy choices"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 2024 HoneyBook Inc."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-socials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-facebook"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-instagram"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-x-twitter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-pinterest"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-linkedin"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 footer-apps"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/apple.svg",
    alt: "App Store"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/gplay.svg",
    alt: "Google Play"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./jsx/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./jsx/components/Navbar.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var Navbar = function Navbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    featuresDropdown = _useState2[0],
    setFeaturesDropdown = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    resourcesDropdown = _useState4[0],
    setResourcesDropdown = _useState4[1];
  var features = [{
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faClipboardCheck,
    title: "Features overview",
    description: "Powerful features built for small businesses."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFileSignature,
    title: "Online contracts",
    description: "Customizable contracts that look professional."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFileInvoice,
    title: "Online invoices",
    description: "Professional invoices that get you paid fast."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCreditCard,
    title: "Online payments",
    description: "Make it easy for clients to pay you with online payments."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFileInvoice,
    title: "Online proposals",
    description: "Easily book clients by combining an invoice, contract, and payment page."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faClock,
    title: "Online scheduling",
    description: "Skip the back-and-forth and book meetings 2x faster."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCog,
    title: "Automations",
    description: "Put tasks, emails, files, and follow-up on autopilot."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faRobot,
    title: "HoneyBook AI",
    description: "Gain insight, boost productivity, and increase revenue."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMoneyCheckAlt,
    title: "HoneyBook Finance",
    description: "Monitor cashflow, track spending, automate savings, and more."
  }];
  var resources = [{
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSearch,
    title: "Pros Marketplace",
    description: "Find experts to help grow your business."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPodcast,
    title: "Independent Business podcast",
    description: "Join us as we break down the science of self-made success."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faQuestionCircle,
    title: "Help Center",
    description: "Answers and guidance on how to use HoneyBook."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faBlog,
    title: "HoneyBook blog",
    description: "Helpful articles and industry tips for independents."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChalkboardTeacher,
    title: "Live virtual classes",
    description: "Live and on-demand trainings hosted by experts."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFolderOpen,
    title: "Free file setup",
    description: "Let us turn your existing files into ready-to-use client-facing templates."
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    style: {
      background: "#333",
      padding: "10px 20px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: "bold",
      fontSize: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    style: {
      color: "white",
      textDecoration: "none"
    }
  }, "HONEYBOOK")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      margin: 0,
      padding: 0,
      gap: "20px",
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: {
      position: "relative"
    },
    onMouseEnter: function onMouseEnter() {
      return setFeaturesDropdown(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setFeaturesDropdown(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/features",
    style: {
      color: "white",
      textDecoration: "none"
    }
  }, "Features", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    class: "pl-2 fa fa-caret-down",
    "aria-hidden": "true"
  })), featuresDropdown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
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
      zIndex: 1000
    }
  }, features.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        transition: "background 0.3s, transform 0.2s",
        cursor: "pointer"
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.background = "#555";
        e.currentTarget.style.transform = "scale(1.05)";
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.transform = "scale(1)";
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      icon: item.icon,
      size: "2x",
      style: {
        marginBottom: "10px",
        color: "#ff9800"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
      style: {
        marginBottom: "5px"
      }
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: "14px",
        color: "#ddd"
      }
    }, item.description));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: {
      position: "relative"
    },
    onMouseEnter: function onMouseEnter() {
      return setResourcesDropdown(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setResourcesDropdown(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/resources",
    style: {
      color: "white",
      textDecoration: "none"
    }
  }, "Resources", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    class: "pl-2 fa fa-caret-down",
    "aria-hidden": "true"
  })), resourcesDropdown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
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
      zIndex: 1000
    }
  }, resources.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        transition: "background 0.3s, transform 0.2s",
        cursor: "pointer"
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.background = "#555";
        e.currentTarget.style.transform = "scale(1.05)";
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.transform = "scale(1)";
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      icon: item.icon,
      size: "2x",
      style: {
        marginBottom: "10px",
        color: "#ff9800"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
      style: {
        marginBottom: "5px"
      }
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: "14px",
        color: "#ddd"
      }
    }, item.description));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/templates",
    style: {
      color: "white",
      textDecoration: "none"
    }
  }, "Templates")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/pricing",
    style: {
      color: "white",
      textDecoration: "none"
    }
  }, "Pricing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login",
    style: {
      color: "white",
      textDecoration: "none"
    }
  }, "Log In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      background: "#ff9800",
      color: "white",
      border: "none",
      borderRadius: "5px",
      padding: "10px 15px",
      cursor: "pointer"
    }
  }, "Start Free Trial")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./jsx/components/Section3.jsx":
/*!*************************************!*\
  !*** ./jsx/components/Section3.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Section3: () => (/* binding */ Section3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Tile.jsx */ "./jsx/components/Tile.jsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");



var Section3 = function Section3() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: '#ffffff',
      height: '600px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      // Center content vertically
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Integrations that make your life easier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "HoneyBook works with the tools you already use, so you can work more efficiently than ever.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      overflow: 'hidden',
      marginTop: '30px',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCalendarAlt,
    title: "Google contact",
    description: "Client management"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faEnvelope,
    title: "Meta leads",
    description: "Calendar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFileInvoice,
    title: "Quickbooks",
    description: "Reports"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faVideo,
    title: "Reports",
    description: "Communication"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      overflow: 'hidden',
      marginTop: '30px',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCloud,
    title: "iCloud",
    description: "Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCalendarAlt,
    title: "Outlook",
    description: "Email & calendar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAddressBook,
    title: "Phonebook",
    description: "Contact management"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCalendarAlt,
    title: "Meta leads",
    description: "Calendar"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true
  }, "\n\n      .tile:hover {\n        transform: scale(0.95);  /* Zoom effect on hover */\n        cursor: pointer;\n      }\n\n      .tile {\n        transition: transform 0.3s ease;  /* Smooth transition for scale on hover */\n      }\n    "));
};

/***/ }),

/***/ "./jsx/components/Tile.jsx":
/*!*********************************!*\
  !*** ./jsx/components/Tile.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tile: () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");


var Tile = function Tile(_ref) {
  var icon = _ref.icon,
    title = _ref.title,
    description = _ref.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tile",
    style: {
      margin: '0 20px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      textAlign: 'center',
      transition: 'transform 0.3s',
      minWidth: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: icon,
    size: "3x",
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, description));
};

/***/ }),

/***/ "./jsx/pages/Feature.jsx":
/*!*******************************!*\
  !*** ./jsx/pages/Feature.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Feature)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/style */ "./public/style.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Created by: Varshil Patel - 8938884



function Feature() {
  var features = [{
    id: 1,
    title: "Send invoices",
    icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Invoice_2x.png"
  }, {
    id: 2,
    title: "Send contracts",
    icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Contract_2x.png"
  }, {
    id: 3,
    title: "Book & schedule",
    icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Calendar_2x.png"
  }, {
    id: 4,
    title: "Automate workflows",
    icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Automation_2x.png"
  }, {
    id: 5,
    title: "Track inquiries",
    icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Inquiries_2x.png"
  }, {
    id: 6,
    title: "Manage projects",
    icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Briefcase_2x.png"
  }, {
    id: 7,
    title: "Send forms & questionnaires",
    icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Document_2x.png"
  }, {
    id: 8,
    title: "Accept online payments",
    icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Credit_Card_2x.png"
  }, {
    id: 9,
    title: "Not sure",
    icon: ""
  }];
  var sections = [{
    id: "invoices",
    title: "Invoices",
    icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/Invoice.svg",
    description: "More cha-chings for you",
    details: ["Secure and easy digital payments", "Payment schedules and reminders", "Auto-saved item bank"],
    image: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_405/v1/marketing_site/features_page/light-brows.png",
    quote: "HoneyBook invoicing is a way to get paid extremely easy, fast and without any troubles.",
    author: "Mark Dickinson",
    authorImage: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/mark_dickinson.png",
    authorTitle: "Mark Dickinson Photography"
  }, {
    id: "proposals",
    title: "Proposals",
    icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/proposal.svg",
    description: "Professional and flexible",
    details: ["Invoice, contract, payment all in one", "1-2-3 client booking process", "Professional branding"],
    image: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_370/v1/marketing_site/features-hub/Proposal_2x.png",
    quote: "I think this is the greatest thing ever invented. I love the professional proposals and streamlined processes.",
    author: "JKelly Hillis",
    authorImage: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/kelly_hills.jpg",
    authorTitle: "The Perfect Posey"
  }, {
    id: "scheduling",
    title: "Scheduling",
    icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/calendar-24.svg",
    description: "",
    details: ["Share your meeting link and get booked", "Fully customized to your brand", "Confirmations and reminders"],
    image: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_490/v1/marketing_site/features-hub/desktop/full_images/scheduling_calendar.png"
  }, {
    id: "contracts",
    title: "Contracts",
    icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/contract.svg",
    description: "Legit and ready-to-go",
    details: ["Legit online signatures", "Smart bar highlights where to sign", "Instant notifications when a client signs"],
    image: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_450/v1/marketing_site/features-hub/contract-brows.png",
    quote: "I eliminated paper contracts 🙌 and now my clients can easily sign online!",
    author: "Jerin Girouard",
    authorImage: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/erin_girouard.png",
    authorTitle: "Erin Girouard Photography"
  }, {
    id: "automation",
    title: "Automation",
    icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/Automation.svg",
    description: "Productivity on overdrive",
    details: ["Custom step-by-step sequences", "Automate emails, tasks, and more", "Save time and brainpower"],
    image: "./img/automation.png",
    quote: "It has cut my workflow time in half! I'm so impressed with the elevated look I get to provide to my clients.",
    author: "Allyn Childers",
    authorImage: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/allyn_childers.png",
    authorTitle: "Sweet Pear Photography"
  }, {
    id: "integration",
    title: "Integration",
    icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/Integrations.svg",
    description: "Efficient and easy to use",
    details: ["HoneyBook seamlessly integrates with all the tools you already use, so that you can work more efficiently than ever."],
    image: "./img/integration.png",
    quote: "It's the overall package that makes my life easier.",
    author: "Mandy Ogaz",
    authorImage: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features_page/integrations/quote-avatar.jpg",
    authorTitle: "The Potted Pansy"
  }, {
    id: "allinone",
    title: "All-in-one",
    icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/package.svg",
    description: "Simpler, smarter business",
    details: ["End-to-end client management", "State of the art mobile app", "Booking, payments, reports and more"],
    image: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_360/v1/marketing_site/features_page/all-in-one-rebrand.png",
    quote: "t is a breath of fresh air to be able to handle everything (client communication, contracts, invoices, questionnaires) in one platform.",
    author: "Hacker Medias",
    authorImage: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,g_face,f_auto,q_auto,w_100/marketing_site/testimonial-avatars/Kristal.png",
    authorTitle: "Hacker Medias"
  }];
  var integrations = [{
    name: "Zoom",
    icon: "https://upload.wikimedia.org/zoom-icon-url",
    // Replace with actual icon URL
    link: "#"
  }, {
    name: "QuickBooks",
    icon: "https://upload.wikimedia.org/quickbooks-icon-url",
    // Replace with actual icon URL
    link: "#"
  }, {
    name: "Zapier",
    icon: "https://upload.wikimedia.org/zapier-icon-url",
    // Replace with actual icon URL
    link: "#"
  }, {
    name: "Gmail",
    icon: "https://upload.wikimedia.org/gmail-icon-url",
    // Replace with actual icon URL
    link: "#"
  }, {
    name: "Google Calendar",
    icon: "https://upload.wikimedia.org/google-calendar-icon-url",
    // Replace with actual icon URL
    link: "#"
  }];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sections[0].id),
    _useState2 = _slicedToArray(_useState, 2),
    activeSection = _useState2[0],
    setActiveSection = _useState2[1];
  var sectionRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.5
    });
    sectionRefs.current.forEach(function (ref) {
      if (ref) observer.observe(ref);
    });
    return function () {
      return observer.disconnect();
    };
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(features.map(function (feature) {
      return feature.id;
    })),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedFeatures = _useState4[0],
    setSelectedFeatures = _useState4[1];

  // Function to toggle feature selection
  var toggleFeature = function toggleFeature(id) {
    setSelectedFeatures(function (prev) {
      return prev.includes(id) ? prev.filter(function (featureId) {
        return featureId !== id;
      }) : [].concat(_toConsumableArray(prev), [id]);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(_public_style__WEBPACK_IMPORTED_MODULE_1__["default"].boxWidth)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gray-50 py-8 px-4 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-2xl font-bold text-center mb-6"
  }, "Powerful features built for small businesses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-center text-gray-600 mb-8"
  }, "What do you want to do with HoneyBook?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
  }, features.map(function (feature) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: feature.id,
      onClick: function onClick() {
        return toggleFeature(feature.id);
      } // Toggle feature on click
      ,
      className: "flex flex-col items-center border ".concat(selectedFeatures.includes(feature.id) ? "border-gray-300 " : "border-purple-500 bg-purple-100", " rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer")
    }, feature.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: feature.icon,
      alt: feature.title,
      className: "w-18 h-16 mb-4"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-gray-500"
    }, "...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-center text-sm font-medium"
    }, feature.title));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-8 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
  }, "Start free trial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-gray-500 mt-2 text-sm"
  }, "No credit card required"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "min-h-screen bg-gray-50 block md:flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
    className: "w-1/6 sticky h-[500px] top-20 p-4 hidden md:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-4"
  }, sections.map(function (section) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: section.id,
      className: "cursor-pointer flex ".concat(activeSection === section.id ? "text-black font-semibold" : "text-gray-600")
    }, activeSection === section.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: section.icon,
      alt: section.title,
      className: "w-6 h-6 mr-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#".concat(section.id),
      className: "hover:text-blue-500 transition-colors font-poppins"
    }, section.title));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "md:w-3/4 w-full overflow-y-auto px-6 py-8"
  }, sections.map(function (section, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: section.id,
      key: section.id,
      ref: function ref(el) {
        return sectionRefs.current[index] = el;
      },
      className: "py-16 border-b flex md:w-[90%] w-full md:flex-row flex-col items-start justify-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "text-3xl font-bold text-gray-800 font-poppins"
    }, section.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-gray-600 text-lg mt-2 font-poppins"
    }, section.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "mt-4 space-y-2"
    }, section.details.map(function (detail, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: i,
        className: "flex items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-blue-500 mr-2 font-poppins"
      }, "\u2714"), detail);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "justify-center flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: section.image,
      alt: section.title,
      className: "w-full max-w-lg mx-auto"
    }))), ((section === null || section === void 0 ? void 0 : section.quote) || (section === null || section === void 0 ? void 0 : section.author) || (section === null || section === void 0 ? void 0 : section.authorImage) || (section === null || section === void 0 ? void 0 : section.authorTitle)) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", {
      className: "mt-6 text-gray-500 italic font-poppins"
    }, "\u201C", section.quote, "\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-4 flex items-center space-x-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: section.authorImage,
      alt: section.author,
      className: "w-10 h-10 rounded-full"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "font-medium font-poppins"
    }, section.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-sm text-gray-500 font-poppins"
    }, section.authorTitle)))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#FFF5EE] "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "xl:max-w-[1280px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center md:text-left md:w-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl md:text-5xl font-bold text-gray-900"
  }, "It's free to try. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " We hope you do."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-6 text-lg text-gray-700"
  }, "93% of members would recommend ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " HoneyBook to a friend."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
  }, "Start free trial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-2 text-sm text-gray-500"
  }, "No credit card required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-10 md:mt-0 md:w-1/2 flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/moneystack.png",
    alt: "Money Stack",
    className: " w-[200px] h-[303px]"
  })))));
}

/***/ }),

/***/ "./jsx/pages/Help.jsx":
/*!****************************!*\
  !*** ./jsx/pages/Help.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ArticleSection = function ArticleSection(_ref) {
  var title = _ref.title,
    description = _ref.description,
    articles = _ref.articles;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "article-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, articles, " articles"));
};
var Help = function Help() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "help"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, "\n          .help {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f4f4f4;\n          }\n\n          .help-header {\n            background: linear-gradient(90deg, #0b0b0b, #00b4d8);\n            color: white;\n            padding: 20px;\n            text-align: center;\n          }\n\n          .search-container {\n            margin-top: 10px;\n            display: flex;\n            justify-content: center;\n          }\n\n          .search-bar {\n            padding: 10px;\n            width: 300px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n          }\n\n          .search-icon {\n            font-size: 18px;\n            color: #00b4d8;\n            margin-left: -35px;\n            margin-top: 5px;\n          }\n\n          .main-content {\n            padding: 20px;\n          }\n\n          .payment-questions h2 {\n            color: #333;\n          }\n\n          .payment-questions ul {\n            list-style-type: none;\n            padding: 0;\n          }\n\n          .payment-questions ul li {\n            margin-bottom: 10px;\n          }\n\n          .article-grid {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 20px;\n            margin-top: 20px;\n          }\n\n          .article-section {\n            background-color: white;\n            border: 1px solid #ddd;\n            padding: 15px;\n            border-radius: 5px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n          }\n\n          .article-section h3 {\n            font-size: 18px;\n            color: #333;\n          }\n\n          .article-section p {\n            font-size: 14px;\n            color: #666;\n          }\n\n          .article-section span {\n            font-size: 12px;\n            color: #00b4d8;\n          }\n\n          .help-footer {\n            background: linear-gradient(90deg, #0b0b0b, #00b4d8);\n            color: white;\n            text-align: center;\n            padding: 20px;\n          }\n\n          .help-footer nav a {\n            color: white;\n            margin: 0 10px;\n            text-decoration: none;\n          }\n\n          .help-footer nav a:hover {\n            text-decoration: underline;\n          }\n        "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "help-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Find advice and answers to help you get the most out of HoneyBook."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Search for articles...",
    className: "search-bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-search search-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "payment-questions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Get your payments questions answered"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Payment processing times, transaction fees, and client payment options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Set up your account to get paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Issue a refund to your clients"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Set up instant deposit for your payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "I don\u2019t see my payments in my bank account. Where are they?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "article-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Getting Started",
    description: "Set up your account and get started with HoneyBook",
    articles: 25
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Training & Video Tutorials",
    description: "Step-by-step video walkthroughs and recorded webinars to help you get the most out of HoneyBook",
    articles: 22
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Finance and Payments",
    description: "Learn how to get paid, manage client payments, and about other financial features",
    articles: 35
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "HoneyBook Balance",
    description: "Learn how to manage your money where you manage your business with a HoneyBook Balance account",
    articles: 28
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Workflows",
    description: "Learn about lead and contact forms, automations, emails, and tasks in HoneyBook",
    articles: 84
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Client Experience",
    description: "See what your client experiences in HoneyBook when they work with you",
    articles: 19
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Project Management",
    description: "Learn about the project management tools available to you to track time, get notified, and lead",
    articles: 66
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Files and Templates",
    description: "Get everything you need to know about HoneyBook's smart files and templates",
    articles: 95
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Company Management",
    description: "Manage your personal and company-wide account settings in HoneyBook",
    articles: 53
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Integrations",
    description: "Use HoneyBook's QuickBooks, Gmail, Calendly, Facebook, and Zapier integrations",
    articles: 32
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "HoneyBook's Legacy Files",
    description: "Manage invoices, contracts, proposals, brochures, questionnaires, and timelines",
    articles: 6
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Partners and Referrals",
    description: "Get the most out of Honeybook's Referral Program",
    articles: 7
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Release Notes",
    description: "What's new at HoneyBook each month: features, upgrades, and more",
    articles: 20
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArticleSection, {
    title: "Other Articles",
    description: "Everything else you might find helpful to reference or know",
    articles: 11
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "help-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "HONEYBOOK"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Community"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Academy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Webinars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Independent Business Podcast"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Pros Marketplace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Free File Setup"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);

/***/ }),

/***/ "./jsx/pages/HomePage.jsx":
/*!********************************!*\
  !*** ./jsx/pages/HomePage.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _components_Section3_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section3.jsx */ "./jsx/components/Section3.jsx");




var tiles = [{
  title: "Send invoices",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileInvoice
}, {
  title: "Send contracts",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileSignature
}, {
  title: "Book & schedule",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCalendarAlt
}, {
  title: "Automate workflows",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCogs
}, {
  title: "Track inquiries",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faQuestionCircle
}, {
  title: "Manage projects",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faProjectDiagram
}, {
  title: "Send forms & questionnaires",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileAlt
}, {
  title: "Accept online payments",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCreditCard
}, {
  title: "Not sure",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faQuestionCircle
}];
var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: '#ffffff',
      // Example background color
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Client relationships start and grow on HoneyBook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "What do you want to do with HoneyBook?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      overflowX: 'auto',
      padding: '20px 0',
      marginTop: '40px'
    }
  }, tiles.map(function (tile, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      style: {
        width: '120px',
        height: '150px',
        backgroundColor: '#f4f4f4',
        margin: '0 5px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'border 0.3s ease'
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.target.style.border = '2px solid #333';
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.target.style.border = 'none';
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      icon: tile.icon,
      style: {
        fontSize: '40px',
        color: '#333'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        marginTop: '10px',
        fontSize: '14px',
        color: '#333'
      }
    }, tile.title));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      background: '#5f30e3',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer'
    }
  }, "Start Free Trial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    class: "pt-2"
  }, "No credit card required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '40px',
      width: '100%',
      padding: '0 10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'center',
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "$8B+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "earned by HoneyBook members")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'center',
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "90% of invoices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "are paid on time or early")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'center',
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "95% of members"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "feel more organized with HoneyBook")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: '#121417',
      height: '500px',
      display: 'flex',
      justifyContent: 'space-between',
      // Distribute left and right columns
      alignItems: 'center',
      color: 'white',
      padding: '0 10%' // Add padding for spacing
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: 0.4,
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "It\u2019s free to try."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "We hope you do."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      background: '#ffd853',
      color: '#121417',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer'
    }
  }, "Start Free Trial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    class: "pt-2"
  }, "No credit card required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: 1,
      backgroundImage: 'url("/img/honey.png")',
      // Replace with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: '#ffffff',
      // Example background color
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section3_jsx__WEBPACK_IMPORTED_MODULE_2__.Section3, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./jsx/pages/Templates.jsx":
/*!*********************************!*\
  !*** ./jsx/pages/Templates.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// src/pages/Templates.jsx

var Templates = function Templates() {
  var featuredTemplates = [{
    id: 1,
    name: "Project Creation Template",
    description: "Kickstart your projects effortlessly with this creation template.",
    image: "/img/create.png",
    isFree: true
  }, {
    id: 2,
    name: "Workflow Enhancement Template",
    description: "Optimize your processes with our workflow enhancement template.",
    image: "/img/honey.png",
    isFree: true
  }, {
    id: 3,
    name: "Comprehensive Kickstart Guide",
    description: "Begin your projects right with our comprehensive kickstart guide.",
    image: "/img/kick.png",
    isFree: true
  }];
  var featuredTemplates2 = [{
    id: 4,
    name: "Marketing Proposal Template",
    description: "Craft compelling marketing proposals with ease.",
    image: "/img/marketer.png",
    isFree: true
  }, {
    id: 5,
    name: "Simplified Planning Template",
    description: "Streamline your planning with this easy-to-use template.",
    image: "/img/simple.png",
    isFree: true
  }, {
    id: 6,
    name: "Client Onboarding Template",
    description: "Enhance client onboarding with our detailed template.",
    image: "/img/onboarding.png",
    isFree: true
  }];
  var featuredTemplates3 = [{
    id: 7,
    name: "Graphic Design Portfolio",
    description: "Showcase your creative work with a professional portfolio.",
    image: "/img/graphicdesign.png",
    isFree: true
  }, {
    id: 8,
    name: "Designer Profile Template",
    description: "Present your skills effectively with our profile template.",
    image: "/img/graphicdesigner.png",
    isFree: true
  }, {
    id: 9,
    name: "Project Kickoff Template",
    description: "Ensure smooth project starts with our kickoff template.",
    image: "/img/kick.png",
    isFree: true
  }];
  var featuredTemplates4 = [{
    id: 10,
    name: "Creative Brief Template",
    description: "Communicate project visions with our creative brief template.",
    image: "/img/graphicdesign.png",
    isFree: true
  }, {
    id: 11,
    name: "Portfolio Presentation Template",
    description: "Display your work beautifully with this presentation template.",
    image: "/img/graphicdesigner.png",
    isFree: true
  }, {
    id: 12,
    name: "Startup Kickstart Guide",
    description: "Launch your startup successfully with our kickstart guide.",
    image: "/img/kick.png",
    isFree: true
  }];
  var additionalSections = [{
    title: "Contracts",
    templates: featuredTemplates2
  }, {
    title: "Invoices",
    templates: featuredTemplates3
  }, {
    title: "Showit",
    templates: featuredTemplates4
  }];
  var features = [{
    icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66bcbbf36acaa43f4eae893f_Subtract.avif",
    title: "Business management",
    description: "Manage projects, clients, and team in one place."
  }, {
    icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66bcbbf5de2cc53ba03b8ef0_Group%201000002851.avif",
    title: "Scheduling",
    description: "Automate scheduling and free up more time."
  }, {
    icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66bcbbf3cabfe6d1b596d64a_Group%201000002254.avif",
    title: "Finances",
    description: "Track income and expenses seamlessly."
  }, {
    icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66bcbbf3bd8003eda5f0c954_Frame%201073713849.avif",
    title: "Collaboration",
    description: "Collaborate with your team or clients with ease."
  }, {
    icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66d85b0317069b7fe1d6ad2b_Group%2048096068.avif",
    title: "Online payments",
    description: "Get paid faster with online invoicing and payments."
  }, {
    icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66d85b03491db8b19f49776e_Group%2048096347.avif",
    title: "Custom branding",
    description: "Create branded templates to showcase your business."
  }];
  var faqs = [{
    question: "What are HoneyBook templates?",
    answer: "HoneyBook templates are pre-designed tools to streamline your projects."
  }, {
    question: "How can I use templates in HoneyBook?",
    answer: "Simply browse, select, and customize a template to suit your needs."
  }, {
    question: "What if I don’t have a HoneyBook account?",
    answer: "You can sign up for a free trial to start using templates."
  }, {
    question: "What do I need to get started?",
    answer: "All you need is a HoneyBook account to start using our templates."
  }, {
    question: "I'm not a designer—can I really do this?",
    answer: "Yes! Our templates are designed to be simple and customizable for everyone."
  }];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openFAQIndex = _useState2[0],
    setOpenFAQIndex = _useState2[1];
  var toggleFAQ = function toggleFAQ(index) {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "templates-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Browse templates built to impress your clients"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Discover professionally designed templates to streamline your projects and deliver exceptional client experiences."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Search templates...",
    className: "search-bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Featured"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Contracts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Invoices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Showit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "featured-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Featured templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Discover the latest templates that help you kick-start your projects and attract clients."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "template-grid"
  }, featuredTemplates.map(function (template) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "template-card",
      key: template.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: template.image,
      alt: template.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, template.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, template.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "view-button"
    }, "View Template"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "get-button"
    }, "Get Template")));
  }))), additionalSections.map(function (section, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: "template-section",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "section-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, section.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "view-all-button"
    }, "Browse All >")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "template-grid"
    }, section.templates.map(function (template) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "template-card",
        key: template.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: template.image,
        alt: template.name
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, template.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, template.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "view-button"
      }, "View Template"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "get-button"
      }, "Get Template")));
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "features-section"
  }, features.map(function (feature, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "feature",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: feature.icon,
      alt: feature.title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, feature.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, feature.description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "faq-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Frequently Asked Questions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "faq-list"
  }, faqs.map(function (faq, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "faq-item ".concat(openFAQIndex === index ? "open" : ""),
      key: index,
      onClick: function onClick() {
        return toggleFAQ(index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, faq.question), openFAQIndex === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, faq.answer));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Templates);

/***/ }),

/***/ "./public/style.js":
/*!*************************!*\
  !*** ./public/style.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   layout: () => (/* binding */ layout)
/* harmony export */ });
var styles = {
  boxWidth: "xl:max-w-[1280px] w-full mx-auto",
  heading2: "font-poppins font-semibold xs:text-[28px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6"
};
var layout = {
  section: "flex md:flex-row flex-col ".concat(styles.paddingY),
  sectionReverse: "flex md:flex-row flex-col-reverse ".concat(styles.paddingY),
  sectionImgReverse: "flex-1 flex ".concat(styles.flexCenter, " md:mr-10 mr-0 md:mt-0 mt-10 relative"),
  sectionImg: "flex-1 flex ".concat(styles.flexCenter, " md:ml-10 ml-0 md:mt-0 mt-10 relative"),
  sectionInfo: "flex-1 ".concat(styles.flexStart, " flex-col")
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.15 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.absolute{
  position: absolute;
}
.relative{
  position: relative;
}
.sticky{
  position: sticky;
}
.top-20{
  top: 5rem;
}
.mx-auto{
  margin-left: auto;
  margin-right: auto;
}
.mb-4{
  margin-bottom: 1rem;
}
.mb-6{
  margin-bottom: 1.5rem;
}
.mb-8{
  margin-bottom: 2rem;
}
.mr-2{
  margin-right: 0.5rem;
}
.mt-10{
  margin-top: 2.5rem;
}
.mt-2{
  margin-top: 0.5rem;
}
.mt-4{
  margin-top: 1rem;
}
.mt-6{
  margin-top: 1.5rem;
}
.mt-8{
  margin-top: 2rem;
}
.block{
  display: block;
}
.flex{
  display: flex;
}
.grid{
  display: grid;
}
.contents{
  display: contents;
}
.hidden{
  display: none;
}
.h-10{
  height: 2.5rem;
}
.h-16{
  height: 4rem;
}
.h-6{
  height: 1.5rem;
}
.h-\\[303px\\]{
  height: 303px;
}
.h-\\[500px\\]{
  height: 500px;
}
.min-h-screen{
  min-height: 100vh;
}
.w-1\\/6{
  width: 16.666667%;
}
.w-10{
  width: 2.5rem;
}
.w-16{
  width: 4rem;
}
.w-6{
  width: 1.5rem;
}
.w-\\[200px\\]{
  width: 200px;
}
.w-full{
  width: 100%;
}
.max-w-4xl{
  max-width: 56rem;
}
.max-w-lg{
  max-width: 32rem;
}
.grow{
  flex-grow: 1;
}
.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.cursor-pointer{
  cursor: pointer;
}
.grid-cols-2{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.flex-col{
  flex-direction: column;
}
.items-start{
  align-items: flex-start;
}
.items-center{
  align-items: center;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.gap-4{
  gap: 1rem;
}
.space-x-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.overflow-y-auto{
  overflow-y: auto;
}
.rounded-full{
  border-radius: 9999px;
}
.rounded-lg{
  border-radius: 0.5rem;
}
.border{
  border-width: 1px;
}
.border-b{
  border-bottom-width: 1px;
}
.border-gray-300{
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}
.border-purple-500{
  --tw-border-opacity: 1;
  border-color: rgb(168 85 247 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#FFF5EE\\]{
  --tw-bg-opacity: 1;
  background-color: rgb(255 245 238 / var(--tw-bg-opacity, 1));
}
.bg-gray-200{
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-gray-50{
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}
.bg-purple-100{
  --tw-bg-opacity: 1;
  background-color: rgb(243 232 255 / var(--tw-bg-opacity, 1));
}
.bg-purple-600{
  --tw-bg-opacity: 1;
  background-color: rgb(147 51 234 / var(--tw-bg-opacity, 1));
}
.p-4{
  padding: 1rem;
}
.px-4{
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-16{
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-3{
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-8{
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.pl-2{
  padding-left: 0.5rem;
}
.pt-2{
  padding-top: 0.5rem;
}
.text-center{
  text-align: center;
}
.font-poppins{
  font-family: Poppins, sans-serif;
}
.text-2xl{
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl{
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-4xl{
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-bold{
  font-weight: 700;
}
.font-medium{
  font-weight: 500;
}
.font-semibold{
  font-weight: 600;
}
.italic{
  font-style: italic;
}
.text-black{
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-blue-500{
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity, 1));
}
.text-gray-500{
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-gray-600{
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
}
.text-gray-700{
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity, 1));
}
.text-gray-800{
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity, 1));
}
.text-gray-900{
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.underline{
  text-decoration-line: underline;
}
.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-shadow{
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

:root {
  --black-gradient: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  --card-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
}

* {
  scroll-behavior: smooth;
}

.text-gradient {
  background: radial-gradient(
    64.18% 64.18% at 71.16% 35.69%,
    #def9fa 0.89%,
    #bef3f5 17.23%,
    #9dedf0 42.04%,
    #7de7eb 55.12%,
    #5ce1e6 71.54%,
    #33bbcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.bg-blue-gradient {
  background: linear-gradient(
    157.81deg,
    #def9fa -43.27%,
    #bef3f5 -21.24%,
    #9dedf0 12.19%,
    #7de7eb 29.82%,
    #5ce1e6 51.94%,
    #33bbcf 90.29%
  );
}

.bg-black-gradient {
  background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
}

.bg-black-gradient-2 {
  background: linear-gradient(
    -168.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
}

.bg-gray-gradient {
  background: linear-gradient(
    153.47deg,
    rgba(255, 255, 255, 0) -341.94%,
    #14101d 95.11%
  );
}

.bg-discount-gradient {
  background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);
}

.bg-gradient {
  background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);
}

.box-shadow {
  box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
}

.sidebar {
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-top {
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0);
  }
}

.feature-card:hover {
  background: var(--black-gradient);
  box-shadow: var(--card-shadow);
}

.feedback-container .feedback-card:last-child {
  margin-right: 0px;
}

.feedback-card {
  /* background: transparent; */
  background: var(--black-gradient);
}

.feedback-card:hover {
}

.blue__gradient {
  background: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%);
  filter: blur(123px);
}

.pink__gradient {
  background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);
  filter: blur(900px);
}

.white__gradient {
  background: rgba(255, 255, 255, 0.6);
  filter: blur(750px);
}

.hover\\:bg-purple-700:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(126 34 206 / var(--tw-bg-opacity, 1));
}

.hover\\:text-blue-500:hover{
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity, 1));
}

.hover\\:shadow-lg:hover{
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

@media (min-width: 768px){

  .sm\\:grid-cols-2{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1060px){

  .md\\:mt-0{
    margin-top: 0px;
  }

  .md\\:block{
    display: block;
  }

  .md\\:flex{
    display: flex;
  }

  .md\\:w-1\\/2{
    width: 50%;
  }

  .md\\:w-3\\/4{
    width: 75%;
  }

  .md\\:w-\\[90\\%\\]{
    width: 90%;
  }

  .md\\:grid-cols-3{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:flex-row{
    flex-direction: row;
  }

  .md\\:px-20{
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .md\\:text-left{
    text-align: left;
  }

  .md\\:text-5xl{
    font-size: 3rem;
    line-height: 1;
  }
}

@media (min-width: 1200px){

  .lg\\:grid-cols-4{
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1700px){

  .xl\\:max-w-\\[1280px\\]{
    max-width: 1280px;
  }
}
`, "",{"version":3,"sources":["webpack://./index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap\");\r\n\r\n@import \"tailwindcss/base\";\r\n@import \"tailwindcss/components\";\r\n@import \"tailwindcss/utilities\";\r\n\r\n:root {\r\n  --black-gradient: linear-gradient(\r\n    144.39deg,\r\n    #ffffff -278.56%,\r\n    #6d6d6d -78.47%,\r\n    #11101d 91.61%\r\n  );\r\n  --card-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);\r\n}\r\n\r\n* {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.text-gradient {\r\n  background: radial-gradient(\r\n    64.18% 64.18% at 71.16% 35.69%,\r\n    #def9fa 0.89%,\r\n    #bef3f5 17.23%,\r\n    #9dedf0 42.04%,\r\n    #7de7eb 55.12%,\r\n    #5ce1e6 71.54%,\r\n    #33bbcf 100%\r\n  );\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n  text-fill-color: transparent;\r\n}\r\n\r\n.bg-blue-gradient {\r\n  background: linear-gradient(\r\n    157.81deg,\r\n    #def9fa -43.27%,\r\n    #bef3f5 -21.24%,\r\n    #9dedf0 12.19%,\r\n    #7de7eb 29.82%,\r\n    #5ce1e6 51.94%,\r\n    #33bbcf 90.29%\r\n  );\r\n}\r\n\r\n.bg-black-gradient {\r\n  background: linear-gradient(\r\n    144.39deg,\r\n    #ffffff -278.56%,\r\n    #6d6d6d -78.47%,\r\n    #11101d 91.61%\r\n  );\r\n}\r\n\r\n.bg-black-gradient-2 {\r\n  background: linear-gradient(\r\n    -168.39deg,\r\n    #ffffff -278.56%,\r\n    #6d6d6d -78.47%,\r\n    #11101d 91.61%\r\n  );\r\n}\r\n\r\n.bg-gray-gradient {\r\n  background: linear-gradient(\r\n    153.47deg,\r\n    rgba(255, 255, 255, 0) -341.94%,\r\n    #14101d 95.11%\r\n  );\r\n}\r\n\r\n.bg-discount-gradient {\r\n  background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);\r\n}\r\n\r\n.bg-gradient {\r\n  background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);\r\n}\r\n\r\n.sidebar {\r\n  -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\r\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\r\n}\r\n\r\n@-webkit-keyframes slide-top {\r\n  0% {\r\n    -webkit-transform: translateY(100px);\r\n    transform: translateY(100px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes slide-top {\r\n  0% {\r\n    -webkit-transform: translateY(100px);\r\n    transform: translateY(100px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.feature-card:hover {\r\n  background: var(--black-gradient);\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n.feedback-container .feedback-card:last-child {\r\n  margin-right: 0px;\r\n}\r\n\r\n.feedback-card {\r\n  /* background: transparent; */\r\n  background: var(--black-gradient);\r\n}\r\n\r\n.feedback-card:hover {\r\n}\r\n\r\n.blue__gradient {\r\n  background: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%);\r\n  filter: blur(123px);\r\n}\r\n\r\n.pink__gradient {\r\n  background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);\r\n  filter: blur(900px);\r\n}\r\n\r\n.white__gradient {\r\n  background: rgba(255, 255, 255, 0.6);\r\n  filter: blur(750px);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksuryaprakashnagarajan_assignment1"] = self["webpackChunksuryaprakashnagarajan_assignment1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./jsx/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map