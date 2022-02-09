"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuoteControl = QuoteControl;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Inputs = require("../../Inputs");

var _EditModal = _interopRequireDefault(require("../../EditModal"));

var _reactRedux = require("react-redux");

var _configSlice = require("../../LayoutEditor/configSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function QuoteControl(_ref) {
  var name = _ref.name,
      title = _ref.title,
      text = _ref.text,
      color = _ref.color,
      border = _ref.border,
      showIcon = _ref.showIcon,
      author = _ref.author,
      setData = _ref.setData;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1],
      toggleEditable = function toggleEditable() {
    return setEditing(!editing);
  };

  if (editing) {
    return /*#__PURE__*/_react.default.createElement(QuoteEditor, {
      text: text,
      title: title,
      color: color,
      border: border,
      showIcon: showIcon,
      author: author,
      setData: setData,
      toggleEditable: toggleEditable,
      name: name
    });
  }

  return /*#__PURE__*/_react.default.createElement(QuoteDisplay, {
    text: text,
    title: title,
    color: color,
    border: border,
    showIcon: showIcon,
    author: author,
    onClick: toggleEditable
  });
}

QuoteControl.defaultProps = {
  text: '',
  title: '',
  color: 'black',
  border: 'none',
  showIcon: '1',
  author: '',
  editing: false
};

function QuoteEditor(props) {
  var _useState3 = (0, _react.useState)(props.text),
      _useState4 = _slicedToArray(_useState3, 2),
      text = _useState4[0],
      setText = _useState4[1],
      _useState5 = (0, _react.useState)(props.title),
      _useState6 = _slicedToArray(_useState5, 2),
      title = _useState6[0],
      setTitle = _useState6[1],
      _useState7 = (0, _react.useState)(props.color),
      _useState8 = _slicedToArray(_useState7, 2),
      color = _useState8[0],
      setColor = _useState8[1],
      _useState9 = (0, _react.useState)(props.border),
      _useState10 = _slicedToArray(_useState9, 2),
      border = _useState10[0],
      setBorder = _useState10[1],
      _useState11 = (0, _react.useState)(props.showIcon),
      _useState12 = _slicedToArray(_useState11, 2),
      showIcon = _useState12[0],
      setShowIcon = _useState12[1],
      _useState13 = (0, _react.useState)(props.author),
      _useState14 = _slicedToArray(_useState13, 2),
      author = _useState14[0],
      setAuthor = _useState14[1],
      _useState15 = (0, _react.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      error = _useState16[0],
      setError = _useState16[1],
      saveChanges = function saveChanges(e) {
    e.preventDefault();

    if (props.required && !text.length) {
      setError('Please enter some quote text to continue');
    } else {
      props.setData({
        text: text,
        title: title,
        color: color,
        border: border,
        showIcon: showIcon,
        author: author
      });
      setError('');
      props.toggleEditable();
    }
  },
      cancelChanges = function cancelChanges() {
    return props.toggleEditable();
  };

  return /*#__PURE__*/_react.default.createElement(_EditModal.default, {
    saveChanges: saveChanges,
    cancelChanges: cancelChanges,
    error: error
  }, /*#__PURE__*/_react.default.createElement(_Inputs.TextInput, {
    name: props.name + '_title',
    label: "Quote Title",
    value: title,
    onChange: setTitle
  }), /*#__PURE__*/_react.default.createElement(_Inputs.TextInput, {
    name: props.name + '_text',
    label: "Quote Text",
    value: text,
    onChange: setText
  }), /*#__PURE__*/_react.default.createElement(_Inputs.TextInput, {
    name: props.name + '_author',
    label: "Quote Author",
    value: author,
    onChange: setAuthor
  }), /*#__PURE__*/_react.default.createElement(_Inputs.SelectInput, {
    name: props.name + '_icon',
    label: "Display Quote Icon",
    value: showIcon,
    options: [{
      title: 'Display Icon',
      value: '1'
    }, {
      title: 'Hide Icon',
      value: '0'
    }],
    onChange: setShowIcon
  }), /*#__PURE__*/_react.default.createElement(_Inputs.ColorInput, {
    name: props.name + '_color',
    label: "Quote Color",
    value: color,
    onChange: setColor
  }), /*#__PURE__*/_react.default.createElement(_Inputs.SelectInput, {
    name: props.name + '_border',
    label: "Quote Border",
    value: border,
    options: [{
      value: '',
      title: 'None'
    }, {
      value: 'top',
      title: 'Top'
    }, {
      value: 'bottom',
      title: 'Bottom'
    }, {
      value: 'both',
      title: 'Top and Bottom'
    }],
    onChange: setBorder
  }));
}

function QuoteDisplay(props) {
  var cssClasses = (0, _reactRedux.useSelector)(_configSlice.selectCssClasses),
      classList = [cssClasses['pull-quote']];

  if (props.color) {
    classList.push(cssClasses["color-".concat(props.color)]);
  }

  if (props.border) {
    classList.push(cssClasses["border-".concat(props.border)]);
  }

  if (props.showIcon === '1') {
    classList.push(cssClasses['pull-quote-spacing-large']);
  }

  return /*#__PURE__*/_react.default.createElement("blockquote", {
    className: classList.join(' '),
    onClick: props.onClick
  }, props.showIcon === '1' && /*#__PURE__*/_react.default.createElement("div", {
    className: cssClasses['pull-quote-icon']
  }, "\u201C"), props.title && /*#__PURE__*/_react.default.createElement("h2", {
    className: cssClasses['pull-quote-title']
  }, props.title), /*#__PURE__*/_react.default.createElement("p", {
    className: cssClasses['pull-quote-content']
  }, "\u201C", props.text ? props.text : '  [Enter Quote Text Here]  ', "\u201D"), props.author && /*#__PURE__*/_react.default.createElement("cite", {
    className: cssClasses['pull-quote-author']
  }, ' ', props.author, ' '));
}

var _default = QuoteControl;
exports.default = _default;