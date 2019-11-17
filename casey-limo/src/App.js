"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
require("./App.css");
// import limo1 from "./limo1.png";
// import tinylimo1 from "./tinylimo1.png";
var logo = require("./limo1.png");
var logo2 = require("./tinylimo1.png");
exports.App = function () {
    var _a = react_1.useState(window.innerWidth), windowWidth = _a[0], setWindowWidth = _a[1];
    var imageUrl = windowWidth >= 650 ? logo : logo2;
    var handleWindowResize = function () {
        setWindowWidth(window.innerWidth);
    };
    react_1.useEffect(function () {
        window.addEventListener('resize', handleWindowResize);
        return function () {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    return (React.createElement("div", { className: "App", style: { backgroundImage: "url(" + imageUrl + ")" } },
        React.createElement("div", { className: "App-content" },
            React.createElement("div", { style: { fontSize: 32 } },
                React.createElement("h1", null, "CASEY LIMOUSINE"),
                React.createElement("p", null, "Call Now: (802)-451-8006"),
                React.createElement("p", null, " Email: caseylimovt@gmail.com")))));
};
