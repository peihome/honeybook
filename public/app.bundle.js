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
/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar.jsx */ "./jsx/components/Navbar.jsx");
/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer.jsx */ "./jsx/components/Footer.jsx");
/* harmony import */ var _pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/HomePage.jsx */ "./jsx/pages/HomePage.jsx");
/* harmony import */ var _pages_Help_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Help.jsx */ "./jsx/pages/Help.jsx");
/* harmony import */ var _pages_Features_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Features.jsx */ "./jsx/pages/Features.jsx");
/* harmony import */ var _pages_Templates_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Templates.jsx */ "./jsx/pages/Templates.jsx");
/* harmony import */ var _pages_Pricing_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Pricing.jsx */ "./jsx/pages/Pricing.jsx");
// Created by: Surya Prakash N - 8924019











var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: 1,
      padding: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/features",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Features_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/help",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Help_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/templates",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Templates_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/pricing",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Pricing_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
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
// Created by: Surya Prakash N - 8924019



// Inline CSS styles
var styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif'
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px'
  },
  footerColumnLeft: {
    flex: 1
  },
  footerColumnLeftH1: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ff9800',
    marginBottom: '20px'
  },
  footerColumnRight: {
    display: 'flex',
    gap: '30px',
    flex: 3,
    flexWrap: 'wrap'
  },
  footerColumn: {
    flex: 1,
    minWidth: '200px'
  },
  footerColumnH4: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#ff9800'
  },
  footerColumnUl: {
    listStyleType: 'none',
    padding: 0
  },
  footerColumnLi: {
    margin: '10px 0',
    fontSize: '14px',
    transition: 'color 0.3s'
  },
  footerColumnLiHover: {
    color: '#ff9800',
    cursor: 'pointer'
  },
  footerBottom: {
    marginTop: '40px',
    textAlign: 'center'
  },
  footerBottomP: {
    margin: 0,
    fontSize: '14px',
    color: '#bdc3c7'
  },
  footerSocials: {
    margin: '10px 0'
  },
  footerSocialsIcon: {
    fontSize: '20px',
    color: '#fff',
    margin: '0 10px',
    transition: 'color 0.3s'
  },
  footerSocialsIconHover: {
    color: '#ff9800'
  },
  footerApps: {
    marginTop: '15px'
  },
  footerAppsImg: {
    width: '120px',
    margin: '0 10px',
    transition: 'transform 0.3s'
  },
  footerAppsImgHover: {
    transform: 'scale(1.1)'
  }
};

// React Footer Component
var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    style: styles.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerContent,
    class: "footerContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerColumnLeft
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: styles.footerColumnLeftH1
  }, "HONEYBOOK")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerColumnRight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerColumn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: styles.footerColumnH4
  }, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: styles.footerColumnUl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Features overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Online contracts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Online signature generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Online document signing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Online invoices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Online payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Payment reminders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Online proposals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Online scheduling"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "HoneyBook Finance"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerColumn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: styles.footerColumnH4
  }, "HoneyBook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: styles.footerColumnUl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Careers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Press"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Company news"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Educator program"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Referral program"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Terms & privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Subpoena policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Your privacy choices"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerColumn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: styles.footerColumnH4
  }, "Free tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: styles.footerColumnUl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Contract templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Invoice templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Invoice generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Self-employment tax calculator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Email signature generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Mission statement generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Business personality test"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerColumn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: styles.footerColumnH4
  }, "Resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: styles.footerColumnUl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Live chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Help Center"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "HoneyBook Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Live virtual classes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "HoneyBook business academy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Independent Business podcast"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Pros Marketplace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Free file setup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: styles.footerColumnLi
  }, "Sitemap"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: styles.footerBottomP
  }, "\xA9 2024 HoneyBook Inc."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerSocials
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-facebook",
    style: styles.footerSocialsIcon,
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.color = '#ff9800';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.color = 'white';
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-instagram",
    style: styles.footerSocialsIcon,
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.color = '#ff9800';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.color = 'white';
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-x-twitter",
    style: styles.footerSocialsIcon,
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.color = '#ff9800';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.color = 'white';
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-pinterest",
    style: styles.footerSocialsIcon,
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.color = '#ff9800';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.color = 'white';
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-linkedin",
    style: styles.footerSocialsIcon,
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.color = '#ff9800';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.color = 'white';
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.footerApps
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/apple.svg",
    alt: "App Store",
    style: styles.footerAppsImg,
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.transform = 'scale(1.1)';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.transform = 'scale(1)';
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/gplay.svg",
    alt: "Google Play",
    style: styles.footerAppsImg,
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.transform = 'scale(1.1)';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.transform = 'scale(1)';
    }
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _public_css_navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/css/navbar.css */ "./public/css/navbar.css");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Created by: Surya Prakash N - 8924019






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
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faClipboardCheck,
    title: "Features overview",
    description: "Powerful features built for small businesses."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileSignature,
    title: "Online contracts",
    description: "Customizable contracts that look professional."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileInvoice,
    title: "Online invoices",
    description: "Professional invoices that get you paid fast."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCreditCard,
    title: "Online payments",
    description: "Make it easy for clients to pay you with online payments."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileInvoice,
    title: "Online proposals",
    description: "Easily book clients by combining an invoice, contract, and payment page."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faClock,
    title: "Online scheduling",
    description: "Skip the back-and-forth and book meetings 2x faster."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCog,
    title: "Automations",
    description: "Put tasks, emails, files, and follow-up on autopilot."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faRobot,
    title: "HoneyBook AI",
    description: "Gain insight, boost productivity, and increase revenue."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMoneyCheckAlt,
    title: "HoneyBook Finance",
    description: "Monitor cashflow, track spending, automate savings, and more."
  }];
  var resources = [{
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSearch,
    title: "Pros Marketplace",
    description: "Find experts to help grow your business."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPodcast,
    title: "Independent Business podcast",
    description: "Join us as we break down the science of self-made success."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faQuestionCircle,
    title: "Help Center",
    description: "Answers and guidance on how to use HoneyBook."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBlog,
    title: "HoneyBook blog",
    description: "Helpful articles and industry tips for independents."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faChalkboardTeacher,
    title: "Live virtual classes",
    description: "Live and on-demand trainings hosted by experts."
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFolderOpen,
    title: "Free file setup",
    description: "Let us turn your existing files into ready-to-use client-facing templates."
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    style: {
      background: "#2c3e50",
      // Matching footer color
      padding: "10px 20px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "homeAndTrial",
    style: {
      fontWeight: "bold",
      fontSize: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/",
    style: {
      color: "white",
      textDecoration: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/favicon.png",
    class: "pr-2"
  }), "HONEYBOOK")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    class: "ulClass",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/features",
    style: {
      color: "white",
      textDecoration: "none",
      position: "relative",
      fontWeight: "bold"
    }
  }, "Features", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "pl-2 fa fa-caret-down",
    "aria-hidden": "true",
    style: {
      marginLeft: "5px"
    }
  })), featuresDropdown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dropitem",
    style: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#34495e",
      // Slightly lighter than the navbar background
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/features",
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
        e.currentTarget.style.background = "#2c3e50"; // Darker on hover
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold"
    }
  }, "Resources", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "pl-2 fa fa-caret-down",
    "aria-hidden": "true",
    style: {
      marginLeft: "5px"
    }
  })), resourcesDropdown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dropitemResources",
    style: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#34495e",
      // Slightly lighter than the navbar background
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
        e.currentTarget.style.background = "#2c3e50"; // Darker on hover
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/templates",
    style: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold"
    }
  }, "Templates")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/pricing",
    style: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold"
    }
  }, "Pricing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/help",
    style: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold"
    }
  }, "Help"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    id: "trialButtonDesktop",
    to: "/signup",
    style: {
      backgroundColor: "#ff9800",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "background 0.3s"
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.background = "#f57c00";
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.background = "#ff9800";
    }
  }, "Start Free Trial"))));
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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _public_css_section3_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/css/section3.css */ "./public/css/section3.css");
// Created by: Surya Prakash N - 8924019





var Section3 = function Section3() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: '#f4f7fc',
      // Light gray background for the section
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
      width: '100%',
      boxSizing: 'border-box',
      marginBottom: '40px' // Added margin at the bottom for space between sections
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#333'
    }
  }, "Integrations that make your life easier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: '16px',
      color: '#555'
    }
  }, "HoneyBook works with the tools you already use, so you can work more efficiently than ever.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section3Class",
    style: {
      width: '100%',
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      flexWrap: 'wrap',
      // Wrap tiles on smaller screens
      gap: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCalendarAlt,
    title: "G - Contacts",
    description: "Client management",
    color: "google",
    style: {
      transform: 'translateY(-30px)',
      width: '25%',
      minWidth: '200px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEnvelope,
    title: "Meta leads",
    description: "Calendar",
    color: "meta",
    style: {
      width: '18%',
      minWidth: '200px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileInvoice,
    title: "Quickbooks",
    description: "Reports",
    color: "quickbooks",
    style: {
      transform: 'translateY(30px)',
      width: '25%',
      minWidth: '200px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMailBulk,
    title: "Gmail",
    description: "Email communication",
    color: "gmail",
    style: {
      width: '18%',
      minWidth: '200px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faZap,
    title: "Zapier",
    description: "Automation",
    color: "zapier",
    style: {
      width: '25%',
      minWidth: '200px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCloud,
    title: "iCloud",
    description: "Email",
    color: "icloud",
    style: {
      transform: 'translateY(-20px)',
      width: '20%',
      minWidth: '200px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCalendarAlt,
    title: "Outlook",
    description: "Email & calendar",
    color: "outlook",
    style: {
      width: '18%',
      minWidth: '200px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAddressBook,
    title: "Phonebook",
    description: "Contact management",
    color: "phonebook",
    style: {
      transform: 'translateY(20px)',
      width: '22%',
      minWidth: '200px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tile_jsx__WEBPACK_IMPORTED_MODULE_1__.Tile, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUsers,
    title: "Teams",
    description: "Collaboration",
    color: "teams",
    style: {
      transform: 'translateY(10px)',
      width: '20%',
      minWidth: '200px'
    }
  }))));
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
// Created by: Surya Prakash N - 8924019



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

/***/ "./jsx/pages/Features.jsx":
/*!********************************!*\
  !*** ./jsx/pages/Features.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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



var Features = function Features() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    __webpack_require__.e(/*! import() */ "public_css_features_css").then(__webpack_require__.bind(__webpack_require__, /*! ../../public/css/features.css */ "./public/css/features.css"));
  }, []);
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
    className: "{`${styles.boxWidth}`} paddingTop5"
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);

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
    className: "help paddingTop5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, "\n          .help {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f4f4f4;\n          }\n\n          .help-header {\n            background: linear-gradient(90deg, #0b0b0b, #00b4d8);\n            color: white;\n            padding: 20px;\n            text-align: center;\n          }\n\n          .search-container {\n            margin-top: 10px;\n            display: flex;\n            justify-content: center;\n          }\n\n          .search-bar {\n            padding: 10px;\n            width: 300px;\n            font-size: 16px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n          }\n\n          .search-icon {\n            font-size: 18px;\n            color: #00b4d8;\n            margin-left: -35px;\n            margin-top: 5px;\n          }\n\n          .main-content {\n            padding: 20px;\n          }\n\n          .payment-questions h2 {\n            font-size: 24px;\n            color: #333;\n          }\n\n          .payment-questions ul {\n            list-style-type: none;\n            padding: 0;\n          }\n\n          .payment-questions ul li {\n            font-size: 16px;\n            line-height: 1.5;\n            margin-bottom: 10px;\n            color: #444;\n          }\n\n          .article-grid {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 20px;\n            margin-top: 20px;\n          }\n\n          .article-section {\n            background-color: white;\n            border: 1px solid #ddd;\n            padding: 15px;\n            border-radius: 5px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n          }\n\n          .article-section h3 {\n            font-size: 20px; /* Slightly larger for better emphasis */\n            color: #333;\n          }\n\n          .article-section p {\n            font-size: 16px; /* Standard body size */\n            line-height: 1.5; /* Increased for readability */\n            color: #444;\n          }\n\n          .article-section span {\n            font-size: 14px; /* Improved metadata size */\n            color: #00b4d8;\n          }\n\n          .help-footer {\n            background: linear-gradient(90deg, #0b0b0b, #00b4d8);\n            color: white;\n            text-align: center;\n            padding: 20px;\n          }\n\n          .help-footer nav a {\n            color: white;\n            margin: 0 10px;\n            text-decoration: none;\n          }\n\n          .help-footer nav a:hover {\n            text-decoration: underline;\n          }\n        "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
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
  }))));
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
/* harmony import */ var _components_Section3_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section3.jsx */ "./jsx/components/Section3.jsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
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
// Created by: Surya Prakash N - 8924019





var tiles = [{
  title: "Send invoices",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileInvoice,
  color: '#F9A825'
}, {
  title: "Send contracts",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileSignature,
  color: '#0288D1'
}, {
  title: "Book & schedule",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCalendarAlt,
  color: '#7B1FA2'
}, {
  title: "Automate workflows",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCogs,
  color: '#388E3C'
}, {
  title: "Track inquiries",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faQuestionCircle,
  color: '#F44336'
}, {
  title: "Manage projects",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faProjectDiagram,
  color: '#FF9800'
}, {
  title: "Send forms",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFileAlt,
  color: '#9C27B0'
}, {
  title: "Online payments",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCreditCard,
  color: '#4CAF50'
}, {
  title: "Not sure",
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faQuestionCircle,
  color: '#607D8B'
}];
var testimonials = [{
  name: "Alice Johnson",
  quote: "HoneyBook transformed how I manage my clients and projects!",
  photo: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-3.png"
}, {
  name: "Michael Smith",
  quote: "Incredibly user-friendly and efficient. Highly recommended!",
  photo: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-2.png"
}, {
  name: "Sarah Lee",
  quote: "The automation features saved me countless hours.",
  photo: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-1.png"
}];
var HomePage = function HomePage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTiles = _useState2[0],
    setSelectedTiles = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    hoveredTile = _useState4[0],
    setHoveredTile = _useState4[1];
  var handleCheckboxChange = function handleCheckboxChange(title) {
    setSelectedTiles(function (prevSelectedTiles) {
      return prevSelectedTiles.includes(title) ? prevSelectedTiles.filter(function (tile) {
        return tile !== title;
      }) : [].concat(_toConsumableArray(prevSelectedTiles), [title]);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "paddingTop5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: '#ffffff',
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
      flexWrap: 'nowrap',
      overflowX: 'auto',
      padding: '20px 0',
      marginTop: '40px',
      gap: '20px',
      width: '100%'
    }
  }, tiles.map(function (tile, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      style: {
        backgroundColor: tile.color,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px',
        cursor: 'pointer',
        boxSizing: 'border-box',
        minWidth: '150px',
        flexShrink: 0,
        transition: 'border 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: selectedTiles.includes(tile.title) ? '2px solid black' : hoveredTile === tile.title ? '2px solid white' : 'none'
      },
      onMouseEnter: function onMouseEnter() {
        return setHoveredTile(tile.title);
      },
      onMouseLeave: function onMouseLeave() {
        return setHoveredTile(null);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      icon: tile.icon,
      style: {
        fontSize: '40px',
        color: '#fff'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        marginTop: '10px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#fff'
      }
    }, tile.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      checked: selectedTiles.includes(tile.title),
      onChange: function onChange() {
        return handleCheckboxChange(tile.title);
      },
      style: {
        marginTop: '10px',
        cursor: 'pointer',
        accentColor: selectedTiles.includes(tile.title) ? tile.color : '#fff',
        transform: 'scale(1.8)'
      }
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      background: '#5f30e3',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer',
      marginTop: '30px',
      transition: 'background 0.3s ease'
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.target.style.background = '#4b27c0';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.target.style.background = '#5f30e3';
    }
  }, "Start Free Trial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "pt-2"
  }, "No credit card required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '40px',
      width: '100%',
      padding: '0 10%',
      gap: '20px'
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
    className: "section2Class",
    style: {
      backgroundColor: '#121417',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      padding: '0 10%'
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
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.target.style.background = '#ffdf5c';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.target.style.background = '#ffd853';
    }
  }, "Start Free Trial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "pt-2"
  }, "No credit card required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: 1,
      backgroundImage: 'url("/img/honey.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section3_jsx__WEBPACK_IMPORTED_MODULE_2__.Section3, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: 'linear-gradient(to right, #121417, #2e2e2e)',
      // Dark gradient background for depth
      padding: '60px 20px',
      textAlign: 'center',
      color: 'white' // White text for readability
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#F9A825'
    }
  }, "What our users say"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: '18px',
      color: '#ddd',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: '#FF9800',
      fontWeight: 'bold'
    }
  }, "Trusted by over 100,000 independent businesses.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: '18px',
      color: '#bbb',
      marginTop: '0px',
      fontWeight: '600'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: '#4CAF50',
      fontWeight: 'bold'
    }
  }, "93% of members"), " would recommend HoneyBook to a friend.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '30px'
    }
  }, testimonials.map(function (testimonial, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      style: {
        backgroundColor: '#1e1e1e',
        // Darker background for testimonial cards
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
        // Darker shadow for depth
        padding: '20px',
        textAlign: 'center',
        maxWidth: '300px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        // Smooth transition for hover effect
        border: '2px solid #FF9800' // Golden border for a striking look
      },
      onMouseEnter: function onMouseEnter(e) {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.6)';
      },
      onMouseLeave: function onMouseLeave(e) {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: testimonial.photo,
      alt: testimonial.name,
      style: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
        border: '3px solid #F9A825' // Golden border around the image for better visibility
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontStyle: 'italic',
        color: '#ccc'
      }
    }, "\"", testimonial.quote, "\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontWeight: 'bold',
        marginTop: '10px',
        color: '#FFF'
      }
    }, "- ", testimonial.name));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./jsx/pages/Pricing.jsx":
/*!*******************************!*\
  !*** ./jsx/pages/Pricing.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_pricing_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/css/pricing.css */ "./public/css/pricing.css");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Created by: Surya Prakash N - 8924019



var PricingPage = function PricingPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("yearly"),
    _useState2 = _slicedToArray(_useState, 2),
    billingCycle = _useState2[0],
    setBillingCycle = _useState2[1];
  var toggleBilling = function toggleBilling(cycle) {
    setBillingCycle(cycle);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "paddingTop5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Plans that grow with your business"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "All plans start with a 7-day free trial and are a tax-deductible business write-off."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-purple",
    "aria-label": "Start free trial"
  }, "Start free trial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-white",
    "aria-label": "Buy now"
  }, "Buy now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: billingCycle === "monthly" ? "active" : "",
    onClick: function onClick() {
      return toggleBilling("monthly");
    },
    "aria-label": "Switch to monthly billing"
  }, "Monthly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: billingCycle === "yearly" ? "active" : "",
    onClick: function onClick() {
      return toggleBilling("yearly");
    },
    "aria-label": "Switch to yearly billing"
  }, "Yearly (2 months free)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pricing-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Starter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "price"
  }, "$", billingCycle === "yearly" ? "16" : "20", "/month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Start with everything you need to create"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Unlimited clients and projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Basic features")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "Choose Starter Plan"
  }, "Choose Starter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Essentials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "price"
  }, "$", billingCycle === "yearly" ? "32" : "38", "/month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Grow with added productivity and automation tools."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Scheduler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Automation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "Choose Essentials Plan"
  }, "Choose Essentials")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "price"
  }, "$", billingCycle === "yearly" ? "66" : "75", "/month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Scale up with priority support for the whole team."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Unlimited team members"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Priority support")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "Choose Premium Plan"
  }, "Choose Premium"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingPage);

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
    className: "templates-page paddingTop5"
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/navbar.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/navbar.css ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Created by: Surya Prakash N - 8924019 */

nav {
    position: fixed;
    z-index: 999;
    width: 100%;
}

.paddingTop5 {
    padding-top: 3em !important;
}

/* General mobile styles for the Navbar */
@media screen and (max-width: 768px) {

    .paddingTop5 {
        padding-top: 5em !important;
    }

    .footerContent {
        flex-direction: column !important;
    }

    .ulClass {
        gap: 17px !important;
    }

    .section3Class {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
    }

    .section2Class {
        padding: 0 0 0 3% !important;
    }

    .pricing-section {
        flex-direction: column;
        align-items: center;
    }

    .article-grid {
        grid-template-columns: repeat(2, 1fr) !important;
    }

    .footer-content {
        flex-direction: column;
        align-items: center;
    }

    .footer-column-right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: left;
        justify-items: center;
        padding-top: 1em;
    }

    .footer-column {
        width: 100%;
    }

    .dropitem {
        transform: translateX(-15%) !important;
        grid-template-columns: 1fr 1fr 1fr !important;
        width: 510px !important;
    }

    .dropitemResources {
        transform: translateX(-38%) !important;
        width: 510px !important;
    }

    h1{
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .homeAndTrial {
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
    }

    #trialButtonDesktop {
        display: none;
    }

    #trialButtonMobile {
        display: inline;
    }

    nav {
      flex-direction: column;
      align-items: flex-start;
      padding: 10px;
    }
  
    /* Left section: Logo */
    .navbar-logo {
      font-size: 18px;
      margin-bottom: 10px;
    }
  
    /* Right section: Links and Button */
    .navbar-links {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 10px;
    }
  
    /* Make the links stack vertically */
    .navbar-links ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      margin: 0;
      padding: 0;
    }
  
    /* Navbar links styling */
    .navbar-links li {
      width: 100%;
      text-align: left;
      padding: 5px 15px;
    }
  
    /* Remove dropdown display styles and make them a button on mobile */
    .navbar-links li > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      text-decoration: none;
      padding: 10px 0;
      width: 100%;
    }
  
    .navbar-links li > a i {
      margin-left: 10px;
    }
  
    /* Dropdown menus should be hidden on mobile */
    .dropdown-menu {
      display: none;
    }
  
    /* Mobile button styling for Start Free Trial */
    .navbar-button {
      background: #ff9800;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      margin-top: 10px;
      width: 100%;
    }
  
    /* Add some padding to mobile navbar for spacing */
    .navbar-container {
      padding: 10px 20px;
    }
  }
  `, "",{"version":3,"sources":["webpack://./public/css/navbar.css"],"names":[],"mappings":"AAAA,0CAA0C;;AAE1C;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,2BAA2B;AAC/B;;AAEA,yCAAyC;AACzC;;IAEI;QACI,2BAA2B;IAC/B;;IAEA;QACI,iCAAiC;IACrC;;IAEA;QACI,oBAAoB;IACxB;;IAEA;QACI,wBAAwB;QACxB,yCAAyC;IAC7C;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;QACI,gDAAgD;IACpD;;IAEA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,gBAAgB;QAChB,qBAAqB;QACrB,gBAAgB;IACpB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,sCAAsC;QACtC,6CAA6C;QAC7C,uBAAuB;IAC3B;;IAEA;QACI,sCAAsC;QACtC,uBAAuB;IAC3B;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,oBAAoB;IACxB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,eAAe;IACnB;;IAEA;MACE,sBAAsB;MACtB,uBAAuB;MACvB,aAAa;IACf;;IAEA,uBAAuB;IACvB;MACE,eAAe;MACf,mBAAmB;IACrB;;IAEA,oCAAoC;IACpC;MACE,aAAa;MACb,sBAAsB;MACtB,WAAW;MACX,gBAAgB;IAClB;;IAEA,oCAAoC;IACpC;MACE,aAAa;MACb,sBAAsB;MACtB,WAAW;MACX,SAAS;MACT,SAAS;MACT,UAAU;IACZ;;IAEA,yBAAyB;IACzB;MACE,WAAW;MACX,gBAAgB;MAChB,iBAAiB;IACnB;;IAEA,oEAAoE;IACpE;MACE,aAAa;MACb,8BAA8B;MAC9B,mBAAmB;MACnB,YAAY;MACZ,qBAAqB;MACrB,eAAe;MACf,WAAW;IACb;;IAEA;MACE,iBAAiB;IACnB;;IAEA,8CAA8C;IAC9C;MACE,aAAa;IACf;;IAEA,+CAA+C;IAC/C;MACE,mBAAmB;MACnB,YAAY;MACZ,YAAY;MACZ,kBAAkB;MAClB,kBAAkB;MAClB,gBAAgB;MAChB,WAAW;IACb;;IAEA,kDAAkD;IAClD;MACE,kBAAkB;IACpB;EACF","sourcesContent":["/* Created by: Surya Prakash N - 8924019 */\n\nnav {\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n}\n\n.paddingTop5 {\n    padding-top: 3em !important;\n}\n\n/* General mobile styles for the Navbar */\n@media screen and (max-width: 768px) {\n\n    .paddingTop5 {\n        padding-top: 5em !important;\n    }\n\n    .footerContent {\n        flex-direction: column !important;\n    }\n\n    .ulClass {\n        gap: 17px !important;\n    }\n\n    .section3Class {\n        display: grid !important;\n        grid-template-columns: 1fr 1fr !important;\n    }\n\n    .section2Class {\n        padding: 0 0 0 3% !important;\n    }\n\n    .pricing-section {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .article-grid {\n        grid-template-columns: repeat(2, 1fr) !important;\n    }\n\n    .footer-content {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .footer-column-right {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        text-align: left;\n        justify-items: center;\n        padding-top: 1em;\n    }\n\n    .footer-column {\n        width: 100%;\n    }\n\n    .dropitem {\n        transform: translateX(-15%) !important;\n        grid-template-columns: 1fr 1fr 1fr !important;\n        width: 510px !important;\n    }\n\n    .dropitemResources {\n        transform: translateX(-38%) !important;\n        width: 510px !important;\n    }\n\n    h1{\n        font-size: 1.5rem;\n    }\n\n    h2 {\n        font-size: 1.5rem;\n    }\n\n    .homeAndTrial {\n        display: flex;\n        justify-content: space-between;\n        padding-bottom: 15px;\n    }\n\n    #trialButtonDesktop {\n        display: none;\n    }\n\n    #trialButtonMobile {\n        display: inline;\n    }\n\n    nav {\n      flex-direction: column;\n      align-items: flex-start;\n      padding: 10px;\n    }\n  \n    /* Left section: Logo */\n    .navbar-logo {\n      font-size: 18px;\n      margin-bottom: 10px;\n    }\n  \n    /* Right section: Links and Button */\n    .navbar-links {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      margin-top: 10px;\n    }\n  \n    /* Make the links stack vertically */\n    .navbar-links ul {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      gap: 10px;\n      margin: 0;\n      padding: 0;\n    }\n  \n    /* Navbar links styling */\n    .navbar-links li {\n      width: 100%;\n      text-align: left;\n      padding: 5px 15px;\n    }\n  \n    /* Remove dropdown display styles and make them a button on mobile */\n    .navbar-links li > a {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      color: white;\n      text-decoration: none;\n      padding: 10px 0;\n      width: 100%;\n    }\n  \n    .navbar-links li > a i {\n      margin-left: 10px;\n    }\n  \n    /* Dropdown menus should be hidden on mobile */\n    .dropdown-menu {\n      display: none;\n    }\n  \n    /* Mobile button styling for Start Free Trial */\n    .navbar-button {\n      background: #ff9800;\n      color: white;\n      border: none;\n      border-radius: 5px;\n      padding: 10px 15px;\n      margin-top: 10px;\n      width: 100%;\n    }\n  \n    /* Add some padding to mobile navbar for spacing */\n    .navbar-container {\n      padding: 10px 20px;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/pricing.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/pricing.css ***!
  \************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Created by: Surya Prakash N - 8924019 */

/* Global styling for buttons */
.btn {
  padding: 12px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

/* Button for teal color */
.btn-teal {
  background-color: #008080; /* Teal color */
  color: white;
  border: none;
}

.btn-white {
  background-color: white;
  color: #008080; /* Matching teal color */
  border: 2px solid #008080;
}

/* Hover effects for buttons */
.btn:hover {
  opacity: 0.8;
}

/* Header styling */
.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5rem;
  color: #333;
}

.header p {
  color: #666;
  font-size: 1rem;
}

/* Centered toggle button styling */
.toggle {
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  gap: 20px; /* Add spacing between the buttons */
  margin-bottom: 30px;
}

.toggle button {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.toggle button.active {
  background-color: #008080; /* Active teal button */
  color: white;
}

.toggle button:hover {
  opacity: 0.8;
}

/* Pricing section layout */
.pricing-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 20px;
}

.card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  background-color: #f9f9f9;
}

.card h2 {
  color: #333;
}

.card .price {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
}

.card ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.card ul li {
  margin: 5px 0;
}

.card button {
  background-color: #008080; /* Matching teal color */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

/* Button hover effect */
.card button:hover {
  background-color: #006666; /* Darker teal shade */
}

/* Responsive design */
@media (max-width: 768px) {
  .pricing-section {
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
    margin: 10px 0;
  }
}
`, "",{"version":3,"sources":["webpack://./public/css/pricing.css"],"names":[],"mappings":"AAAA,0CAA0C;;AAE1C,+BAA+B;AAC/B;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA,0BAA0B;AAC1B;EACE,yBAAyB,EAAE,eAAe;EAC1C,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,cAAc,EAAE,wBAAwB;EACxC,yBAAyB;AAC3B;;AAEA,8BAA8B;AAC9B;EACE,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA,mCAAmC;AACnC;EACE,aAAa;EACb,uBAAuB,EAAE,oCAAoC;EAC7D,SAAS,EAAE,oCAAoC;EAC/C,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,yBAAyB,EAAE,uBAAuB;EAClD,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA,2BAA2B;AAC3B;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB,EAAE,wBAAwB;EACnD,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,gCAAgC;AAClC;;AAEA,wBAAwB;AACxB;EACE,yBAAyB,EAAE,sBAAsB;AACnD;;AAEA,sBAAsB;AACtB;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,WAAW;IACX,cAAc;EAChB;AACF","sourcesContent":["/* Created by: Surya Prakash N - 8924019 */\n\n/* Global styling for buttons */\n.btn {\n  padding: 12px 20px;\n  margin: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: background 0.3s ease;\n}\n\n/* Button for teal color */\n.btn-teal {\n  background-color: #008080; /* Teal color */\n  color: white;\n  border: none;\n}\n\n.btn-white {\n  background-color: white;\n  color: #008080; /* Matching teal color */\n  border: 2px solid #008080;\n}\n\n/* Hover effects for buttons */\n.btn:hover {\n  opacity: 0.8;\n}\n\n/* Header styling */\n.header {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.header h1 {\n  font-size: 2.5rem;\n  color: #333;\n}\n\n.header p {\n  color: #666;\n  font-size: 1rem;\n}\n\n/* Centered toggle button styling */\n.toggle {\n  display: flex;\n  justify-content: center; /* Center the buttons horizontally */\n  gap: 20px; /* Add spacing between the buttons */\n  margin-bottom: 30px;\n}\n\n.toggle button {\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.toggle button.active {\n  background-color: #008080; /* Active teal button */\n  color: white;\n}\n\n.toggle button:hover {\n  opacity: 0.8;\n}\n\n/* Pricing section layout */\n.pricing-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin: 0 20px;\n}\n\n.card {\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  text-align: center;\n  background-color: #f9f9f9;\n}\n\n.card h2 {\n  color: #333;\n}\n\n.card .price {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 10px 0;\n}\n\n.card ul {\n  list-style-type: none;\n  padding: 0;\n  margin-bottom: 20px;\n}\n\n.card ul li {\n  margin: 5px 0;\n}\n\n.card button {\n  background-color: #008080; /* Matching teal color */\n  color: white;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n/* Button hover effect */\n.card button:hover {\n  background-color: #006666; /* Darker teal shade */\n}\n\n/* Responsive design */\n@media (max-width: 768px) {\n  .pricing-section {\n    grid-template-columns: 1fr;\n  }\n\n  .btn {\n    width: 100%;\n    margin: 10px 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/section3.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/section3.css ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Created by: Surya Prakash N - 8924019 */

/* Common Tile styles */
.tile {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  flex-shrink: 0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Tile hover effect */
.tile:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
}

.tile .fa {
  font-size: 50px;
  color: white;
  margin-bottom: 15px;
}

/* Background color classes */
.tile.google { background-color: #A5D6A7; }
.tile.meta { background-color: #FFEB3B; }
.tile.quickbooks { background-color: #64B5F6; }
.tile.gmail { background-color: #F8BBD0; }
.tile.zapier { background-color: #E1BEE7; }
.tile.icloud { background-color: #B2EBF2; }
.tile.outlook { background-color: #FFCCBC; }
.tile.phonebook { background-color: #C5CAE9; }
.tile.teams { background-color: #C8E6C9; }

.tile .tile-title {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
}

.tile .tile-description {
  font-size: 14px;
  color: #fff;
}

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
  .tile {
      width: 45% !important;
      margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .tile {
      width: 48% !important;
      margin-bottom: 20px;
      transform: translateY(0px);
  }

  .tile + .tile {
      margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .tile {
      font-size: 14px;
  }
}
`, "",{"version":3,"sources":["webpack://./public/css/section3.css"],"names":[],"mappings":"AAAA,0CAA0C;;AAE1C,uBAAuB;AACvB;EACE,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,2CAA2C;EAC3C,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA,sBAAsB;AACtB;EACE,sBAAsB;EACtB,eAAe;EACf,4CAA4C;AAC9C;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;AACrB;;AAEA,6BAA6B;AAC7B,eAAe,yBAAyB,EAAE;AAC1C,aAAa,yBAAyB,EAAE;AACxC,mBAAmB,yBAAyB,EAAE;AAC9C,cAAc,yBAAyB,EAAE;AACzC,eAAe,yBAAyB,EAAE;AAC1C,eAAe,yBAAyB,EAAE;AAC1C,gBAAgB,yBAAyB,EAAE;AAC3C,kBAAkB,yBAAyB,EAAE;AAC7C,cAAc,yBAAyB,EAAE;;AAEzC;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA,qCAAqC;AACrC;EACE;MACI,qBAAqB;MACrB,mBAAmB;EACvB;AACF;;AAEA;EACE;MACI,qBAAqB;MACrB,mBAAmB;MAInB,0BAA0B;EAH9B;;EAMA;MACI,gBAAgB;EACpB;AACF;;AAEA;EACE;MACI,eAAe;EACnB;AACF","sourcesContent":["/* Created by: Surya Prakash N - 8924019 */\n\n/* Common Tile styles */\n.tile {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  flex-shrink: 0;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Tile hover effect */\n.tile:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);\n}\n\n.tile .fa {\n  font-size: 50px;\n  color: white;\n  margin-bottom: 15px;\n}\n\n/* Background color classes */\n.tile.google { background-color: #A5D6A7; }\n.tile.meta { background-color: #FFEB3B; }\n.tile.quickbooks { background-color: #64B5F6; }\n.tile.gmail { background-color: #F8BBD0; }\n.tile.zapier { background-color: #E1BEE7; }\n.tile.icloud { background-color: #B2EBF2; }\n.tile.outlook { background-color: #FFCCBC; }\n.tile.phonebook { background-color: #C5CAE9; }\n.tile.teams { background-color: #C8E6C9; }\n\n.tile .tile-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #fff;\n  margin-bottom: 10px;\n}\n\n.tile .tile-description {\n  font-size: 14px;\n  color: #fff;\n}\n\n/* Media Queries for Responsiveness */\n@media (max-width: 1024px) {\n  .tile {\n      width: 45% !important;\n      margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 768px) {\n  .tile {\n      width: 48% !important;\n      margin-bottom: 20px;\n  }\n\n  .tile {\n      transform: translateY(0px);\n  }\n\n  .tile + .tile {\n      margin-top: 20px;\n  }\n}\n\n@media (max-width: 480px) {\n  .tile {\n      font-size: 14px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/navbar.css":
/*!*******************************!*\
  !*** ./public/css/navbar.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./navbar.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./public/css/pricing.css":
/*!********************************!*\
  !*** ./public/css/pricing.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_pricing_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./pricing.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/pricing.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_pricing_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_pricing_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_pricing_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_pricing_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./public/css/section3.css":
/*!*********************************!*\
  !*** ./public/css/section3.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_section3_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./section3.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./public/css/section3.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_section3_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_section3_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_section3_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_section3_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "suryaprakashnagarajan_assignment1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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