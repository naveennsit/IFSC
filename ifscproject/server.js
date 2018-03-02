module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = __webpack_require__(7);

var _home2 = _interopRequireDefault(_home);

var _news = __webpack_require__(9);

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    exact: true,
    component: _home2.default
}, {
    path: '/news',
    component: _news2.default
}];

exports.default = routes;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _routes = __webpack_require__(1);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(3);

var _app = __webpack_require__(10);

var _app2 = _interopRequireDefault(_app);

var _sourceMapSupport = __webpack_require__(12);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === "development") {
    _sourceMapSupport2.default.install();
}
var app = (0, _express2.default)();

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
    console.log(req.url);

    var activeRoute = _routes2.default.find(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    });
    var requestInitialData = activeRoute.component.requestInitialData && activeRoute.component.requestInitialData();

    if (requestInitialData) {
        Promise.resolve(requestInitialData).then(function (response) {
            console.log('calining=============');
            var data = response.data.data;
            var context = {
                initialData: data
            };
            var markUp = (0, _server.renderToString)(_react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: req.url, context: context },
                _react2.default.createElement(_app2.default, null)
            ));
            res.send("\n              <!DOCTYPE html>\n              <head>\n                <title>Universal Reacl</title>\n                <script src=\"/bundle.js\" defer></script>\n                <script>window.__initialData__ = " + JSON.stringify(data) + "</script>\n              </head>\n              <body>\n                <div id=\"root\">" + markUp + "</div>\n              </body>\n            </html>\n          ");
        });
    } else {
        var markUp = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: {} },
            _react2.default.createElement(_app2.default, null)
        ));
        res.send("\n              <!DOCTYPE html>\n              <head>\n                <title>Universal Reacl</title>\n                <script src=\"/bundle.js\" defer></script>\n              </head>\n              <body>\n                <div id=\"root\">" + markUp + "</div>\n              </body>\n            </html>\n          ");
    }
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is listening");
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dropdown_component = __webpack_require__(8);

var _dropdown_component2 = _interopRequireDefault(_dropdown_component);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Naveen.Sharma on 02-03-2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.callStateService = function (bankName) {
            _axios2.default.get("https://biz.timesofindia.indiatimes.com/bankifsc/getlist?seo_bank=" + bankName).then(function (response) {
                var data = response.data.data;
                _this.setState({
                    districtName: '',
                    branchName: '',
                    stateData: data,
                    stateName: '',
                    bankName: bankName,
                    districtData: [],
                    branchData: []

                });
            });
        };

        var initialData = void 0;

        if (props.staticContext) {
            console.log("initail dataa");
            initialData = props.staticContext.initialData;
        } else {
            initialData = window.__initialData__;
            delete window.__initialData__;
        }

        _this.state = {
            bankData: initialData,
            bankName: ''

        };

        return _this;
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_dropdown_component2.default, { data: this.state.bankData,
                    defaultOption: "select Bank",
                    value: this.state.bankName,
                    callbackFn: this.callStateService
                })
            );
        }
    }], [{
        key: "requestInitialData",
        value: function requestInitialData() {
            return _axios2.default.get("https://biz.timesofindia.indiatimes.com/bankifsc/getlist");
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = function (_React$Component) {
    _inherits(DropDown, _React$Component);

    function DropDown(props) {
        _classCallCheck(this, DropDown);

        var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

        _this.onChangeDropdown = function (e) {
            console.log(e.target.value);
            _this.props.callbackFn(e.target.value);
        };

        console.log(props);
        return _this;
    }

    _createClass(DropDown, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var makeDropDown = function makeDropDown() {
                console.log(_this2.data);
                return _this2.props.data.map(function (x) {
                    return _react2.default.createElement(
                        "option",
                        { key: x.seo_val, value: x.seo_val },
                        x.text_val
                    );
                });
            };
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "select",
                        { value: this.props.value, onChange: this.onChangeDropdown },
                        _react2.default.createElement(
                            "option",
                            { value: "", disabled: true },
                            this.props.defaultOption
                        ),
                        makeDropDown()
                    ),
                    ";"
                )
            );
        }
    }]);

    return DropDown;
}(_react2.default.Component);

exports.default = DropDown;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_React$Component) {
    _inherits(News, _React$Component);

    function News(props) {
        _classCallCheck(this, News);

        var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));

        console.log(props);
        return _this;
    }

    _createClass(News, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                'neeee'
            );
        }
    }]);

    return News;
}(_react2.default.Component);

exports.default = News;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(3);

var _routes = __webpack_require__(1);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _routes2.default.map(function (route, i) {
      return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: i }, route));
    })
  );
};

// const App = () => {
//     return (
//         <Switch>
//             {routes.map((route, i) => <Route key={i} {...route} />)}
//         </Switch>
//     );
// };


exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map