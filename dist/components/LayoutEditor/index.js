"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutEditor = LayoutEditor;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _reactRedux = require("react-redux");

var _layoutSlice = require("./layoutSlice");

var _configSlice = require("./configSlice");

var _ControlBlock = _interopRequireDefault(require("../ControlBlock"));

var _Controls = require("../Controls/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LayoutEditor(_ref) {
  var initialContent = _ref.initialContent,
      controls = _ref.controls,
      config = _ref.config,
      customControls = _ref.customControls;

  var content = (0, _reactRedux.useSelector)(_layoutSlice.selectContent),
      cssClasses = (0, _reactRedux.useSelector)(_configSlice.selectCssClasses),
      dispatch = (0, _reactRedux.useDispatch)(),
      controlList = [].concat(_toConsumableArray(controls), _toConsumableArray(Object.keys(customControls))),
      controlLibrary = _objectSpread({
    Heading: {
      control: _Controls.HeadingControl,
      displayName: 'Heading',
      isMainItem: true
    },
    Content: {
      control: _Controls.ContentControl,
      displayName: 'Content',
      isMainItem: true
    },
    Image: {
      control: _Controls.ImageControl,
      displayName: 'Image',
      isMainItem: true
    },
    Gallery: {
      control: _Controls.GalleryControl,
      displayName: 'Gallery',
      isMainItem: true
    },
    Video: {
      control: _Controls.VideoControl,
      displayName: 'Video',
      isMainItem: true
    },
    Quote: {
      control: _Controls.QuoteControl,
      displayName: 'Quote',
      isMainItem: true
    }
  }, customControls);

  (0, _react.useEffect)(function () {
    dispatch((0, _layoutSlice.setContent)(initialContent));
  }, [dispatch, initialContent]);
  (0, _react.useEffect)(function () {
    dispatch((0, _configSlice.mergeConfig)(config));
  }, [dispatch, config]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "contentJSON",
    id: "contentJSON",
    value: JSON.stringify(content)
  }), /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: function onDragEnd(result) {
      var destination = result.destination,
          source = result.source;

      if (!destination) {
        //Wasn't dropped anywhere
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        //Set back in the same place
        return;
      }

      dispatch((0, _layoutSlice.moveItem)({
        currentIndex: result.source.index,
        newIndex: result.destination.index
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Droppable, {
    droppableId: 'dropper'
  }, function (provided) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: cssClasses['block-list'],
      ref: provided.innerRef
    }, content.map(function (row, rowIndex) {
      // This is how to create a React component from a string of its neam
      // https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
      return /*#__PURE__*/_react.default.createElement("div", {
        className: " ".concat(cssClasses[row.position]),
        key: row.id
      }, /*#__PURE__*/_react.default.createElement(_ControlBlock.default, {
        id: row.id,
        index: rowIndex,
        onMoveUp: function onMoveUp() {
          return dispatch((0, _layoutSlice.moveItem)({
            currentIndex: rowIndex,
            newIndex: rowIndex - 1
          }));
        },
        onMoveDown: function onMoveDown() {
          return dispatch((0, _layoutSlice.moveItem)({
            currentIndex: rowIndex,
            newIndex: rowIndex + 1
          }));
        },
        onDelete: function onDelete() {
          return dispatch((0, _layoutSlice.removeContentItem)(rowIndex));
        },
        disableUp: rowIndex === 0,
        disableDown: rowIndex === content.length - 1
      }, row.innerContent.map(function (column, columnIndex) {
        var TheControl = controlLibrary[column.type].control;
        return /*#__PURE__*/_react.default.createElement(TheControl, _extends({
          key: column.id,
          setData: function setData(data) {
            return dispatch((0, _layoutSlice.setContentItemData)({
              rowIndex: rowIndex,
              columnIndex: columnIndex,
              data: data
            }));
          }
        }, column.data));
      })));
    }), provided.placeholder);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: cssClasses['content-buttons']
  }, controlList.map(function (controlName) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: function onClick() {
        var defaultPosition = 'position-full';

        if (controlName === 'Heading') {
          defaultPosition = 'position-offset';
        }

        return dispatch((0, _layoutSlice.addContentItem)({
          id: parseInt(Math.random() * 10000).toString(),
          type: 'article-content',
          position: defaultPosition,
          innerContent: [{
            id: parseInt(Math.random() * 10000).toString(),
            type: controlName,
            data: {}
          }]
        }));
      },
      key: controlName,
      className: cssClasses['button-secondary']
    }, "Add ", controlLibrary[controlName].displayName);
  })));
}

LayoutEditor.defaultProps = {
  controls: [],
  template: []
};
var _default = LayoutEditor;
exports.default = _default;