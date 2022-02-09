"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnywhereEditor = AnywhereEditor;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _store = require("./app/store");

var _reactRedux = require("react-redux");

var _components = require("./components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AnywhereEditor(_ref) {
  var content = _ref.content,
      template = _ref.template,
      controls = _ref.controls,
      config = _ref.config,
      customControls = _ref.customControls;
  var initalContent = !content.length && template.length ? template : content;
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "anywhere-editor"
  }, /*#__PURE__*/_react.default.createElement(_components.LayoutEditor, {
    initialContent: initalContent,
    controls: controls,
    customControls: customControls,
    config: config
  })));
}

AnywhereEditor.defaultProps = {
  content: [],
  template: [],
  controls: ['Heading', 'Content', 'Quote', 'Image', 'Gallery', 'Video'],
  customControls: {},
  config: {}
};
var _default = AnywhereEditor;
exports.default = _default;