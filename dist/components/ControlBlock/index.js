"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlBlock = ControlBlock;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _reactAccessibleDropdownMenuHook = _interopRequireDefault(require("react-accessible-dropdown-menu-hook"));

var _reactRedux = require("react-redux");

var _layoutSlice = require("../LayoutEditor/layoutSlice");

var _configSlice = require("../LayoutEditor/configSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ControlBlock(_ref) {
  var id = _ref.id,
      index = _ref.index,
      onMoveUp = _ref.onMoveUp,
      onMoveDown = _ref.onMoveDown,
      onDelete = _ref.onDelete,
      disableUp = _ref.disableUp,
      disableDown = _ref.disableDown,
      disableDelete = _ref.disableDelete,
      children = _ref.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setFocused = _useState2[1],
      _useDropdownMenu = (0, _reactAccessibleDropdownMenuHook.default)(3),
      buttonProps = _useDropdownMenu.buttonProps,
      itemProps = _useDropdownMenu.itemProps,
      isOpen = _useDropdownMenu.isOpen,
      setIsOpen = _useDropdownMenu.setIsOpen,
      row = (0, _reactRedux.useSelector)(function (state) {
    return (0, _layoutSlice.selectRow)(state, id);
  }),
      cssClasses = (0, _reactRedux.useSelector)(function (state) {
    return (0, _configSlice.selectCssClasses)(state);
  }),
      dispatch = (0, _reactRedux.useDispatch)(),
      handlePositionClick = function handlePositionClick(index, item) {
    dispatch((0, _layoutSlice.setRowPosition)({
      rowIndex: index,
      position: item
    }));
    setIsOpen(false);
  },
      positions = [{
    title: 'Normal',
    value: 'position-full'
  }, {
    title: 'Left',
    value: 'position-left'
  }, {
    title: 'Right',
    value: 'position-right'
  }, {
    title: 'Full Page',
    value: 'position-full-page'
  }, {
    title: 'Offset',
    value: 'position-offset-full'
  }, {
    title: 'Offset Left',
    value: 'position-offset-left'
  }, {
    title: 'Offset Right',
    value: 'position-offset-right'
  }];

  return /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Draggable, {
    draggableId: id,
    index: index
  }, function (provided, snapshot) {
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      key: id,
      className: 'block ' + (isFocused || snapshot.isDragging ? cssClasses['control-container-active'] : cssClasses['control-container'])
    }, provided.draggableProps, {
      ref: provided.innerRef,
      onMouseEnter: function onMouseEnter() {
        return setFocused(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setFocused(false);
      }
    }), /*#__PURE__*/_react.default.createElement("ul", {
      className: isFocused || snapshot.isDragging ? cssClasses['block-actions-active'] : cssClasses['block-actions']
    }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", _extends({
      className: cssClasses['button-group-secondary'] + ' block-button-drag'
    }, provided.dragHandleProps), "\u2725")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", _extends({
      type: "button",
      className: cssClasses['button-group-secondary'] + ' block-button-position'
    }, buttonProps), "\u2699", /*#__PURE__*/_react.default.createElement("span", {
      className: cssClasses['sr-only']
    }, "Row Settings")), /*#__PURE__*/_react.default.createElement("ul", {
      className: isOpen ? cssClasses['dropdown-list-open'] : cssClasses['dropdown-list']
    }, positions.map(function (_ref2) {
      var title = _ref2.title,
          value = _ref2.value;
      return /*#__PURE__*/_react.default.createElement("li", {
        key: value
      }, /*#__PURE__*/_react.default.createElement("a", _extends({
        className: (row === null || row === void 0 ? void 0 : row.position) === value ? cssClasses['dropdown-button-active'] : cssClasses['dropdown-button']
      }, itemProps[0], {
        onClick: function onClick() {
          return handlePositionClick(index, value);
        }
      }), title));
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: cssClasses['button-group-secondary'] + ' block-button-up',
      disabled: disableUp,
      onClick: onMoveUp
    }, "\u2191", /*#__PURE__*/_react.default.createElement("span", {
      className: cssClasses['sr-only']
    }, "Move Up"))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: cssClasses['button-group-secondary'] + ' block-button-down',
      disabled: disableDown,
      onClick: onMoveDown
    }, "\u2193", /*#__PURE__*/_react.default.createElement("span", {
      className: cssClasses['sr-only']
    }, "Move Down"))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: cssClasses['button-group-alert'] + ' block-button-delete',
      disabled: disableDelete,
      onClick: onDelete
    }, "X", /*#__PURE__*/_react.default.createElement("span", {
      className: cssClasses['sr-only']
    }, "Delete")))), children);
  });
}

var _default = ControlBlock;
exports.default = _default;