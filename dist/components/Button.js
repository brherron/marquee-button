"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  let {
    path,
    text,
    color = "white"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: path,
    target: "_blank",
    rel: "noreferrer",
    className: "btn",
    style: {
      backgroundColor: color
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-inner"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-text",
    "data-text": text
  }, text)));
}

var _default = Button;
exports.default = _default;