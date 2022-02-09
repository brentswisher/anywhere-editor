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
  var initalContent;

  if (content.length) {
    initalContent = content;
  } else if (template.length) {
    initalContent = template;
  } else {
    //Default to a blank content control so it isn't empty which is confusing to users
    initalContent = [{
      id: '5249',
      type: 'article-content',
      position: 'position-offset-full',
      innerContent: [{
        id: '8466',
        type: 'Heading',
        data: {
          text: 'Hello!',
          level: 1
        }
      }]
    }, {
      id: '9544',
      type: 'article-content',
      position: 'position-full',
      innerContent: [{
        id: '89',
        type: 'Content',
        data: {
          title: '',
          content: "<p>This is where you can edit your article's content. Use the buttons on the bottom to add different kinds of content. You can move a row and adjust its position on the page by using the buttons on the upper left of a block when you hover over it.</p>"
        }
      }]
    }];
  }

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