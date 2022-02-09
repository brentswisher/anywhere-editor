"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = FieldLabel;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _configSlice = require("../../LayoutEditor/configSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FieldLabel(_ref) {
  var htmlFor = _ref.htmlFor,
      visuallyHidden = _ref.visuallyHidden,
      children = _ref.children;
  var cssClasses = (0, _reactRedux.useSelector)(_configSlice.selectCssClasses),
      classList = [cssClasses['label']];

  if (visuallyHidden) {
    classList.push(cssClasses['sr-only']);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: htmlFor,
    className: classList.join(' ')
  }, children));
}

var _default = FieldLabel;
exports.default = _default;