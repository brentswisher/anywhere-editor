"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextInput = RichTextInput;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactQuill = _interopRequireDefault(require("react-quill"));

require("react-quill/dist/quill.snow.css");

var _ = require("../");

var _reactRedux = require("react-redux");

var _configSlice = require("../../LayoutEditor/configSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RichTextInput(_ref) {
  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      formats = _ref.formats,
      labelHidden = _ref.labelHidden,
      helpText = _ref.helpText,
      onChange = _ref.onChange;
  var cssClasses = (0, _reactRedux.useSelector)(_configSlice.selectCssClasses),
      defaultFormats = ['bold', 'italic', 'list', 'bullet', 'link'];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.FieldLabel, {
    htmlFor: name,
    visuallyHidden: labelHidden
  }, label), /*#__PURE__*/_react.default.createElement(CustomToolbar, {
    name: name
  }), /*#__PURE__*/_react.default.createElement(_reactQuill.default, {
    value: value || '',
    onChange: onChange,
    modules: {
      toolbar: "#".concat(name, "Toolbar")
    },
    formats: formats || defaultFormats,
    theme: "snow"
  }), helpText && /*#__PURE__*/_react.default.createElement("span", {
    className: cssClasses['help-text']
  }, ' ', helpText, ' '));
}

function CustomToolbar(_ref2) {
  var name = _ref2.name;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "".concat(name, "Toolbar")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-bold",
    "aria-label": "Bold"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-italic",
    "aria-label": "Italics"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-list",
    value: "ordered",
    "aria-label": "Ordered List"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-list",
    value: "bullet",
    "aria-label": "Bulleted List"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-link",
    type: "button",
    "aria-label": "Link"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-clean",
    type: "button",
    "aria-label": "Clear Formatting"
  })));
}

var _default = RichTextInput;
exports.default = _default;