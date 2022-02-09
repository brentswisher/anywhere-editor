"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorInput = ColorInput;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _reactRedux = require("react-redux");

var _configSlice = require("../../LayoutEditor/configSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ColorInput(_ref) {
  var value = _ref.value,
      name = _ref.name,
      colors = _ref.colors,
      label = _ref.label,
      _onChange = _ref.onChange,
      labelHidden = _ref.labelHidden,
      helpText = _ref.helpText;
  var cssClasses = (0, _reactRedux.useSelector)(_configSlice.selectCssClasses);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.FieldLabel, {
    htmlFor: name,
    visuallyHidden: labelHidden
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: cssClasses['color-picker'],
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cssClasses['color-picker-sample'],
    style: {
      backgroundColor: colors[value]
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("select", {
    name: name,
    id: name,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }, Object.keys(colors).map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: item.value,
      key: name + '_' + index
    }, item);
  })))), helpText && /*#__PURE__*/_react.default.createElement("span", {
    className: cssClasses['help-text']
  }, ' ', helpText, ' '));
}

ColorInput.defaultProps = {
  value: 'black',
  name: 'ColorInput',
  colors: {
    black: '#0a0a0a',
    brown: '#6F4923',
    gray: '#757575',
    'gvsu-blue': '#0065a4',
    teal: '#006666'
  },
  label: 'Color:'
};
var _default = ColorInput;
exports.default = _default;