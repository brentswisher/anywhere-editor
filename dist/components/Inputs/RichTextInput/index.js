"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextInput = RichTextInput;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tinymceReact = require("@tinymce/tinymce-react");

var _tinymce = _interopRequireDefault(require("tinymce/tinymce"));

require("tinymce/themes/silver");

require("tinymce/icons/default");

require("tinymce/skins/ui/oxide/skin.min.css");

require("tinymce/plugins/link");

require("tinymce/plugins/autolink");

require("tinymce/plugins/lists");

require("tinymce/plugins/paste");

require("tinymce/plugins/quickbars");

require("./index.css");

var _ = require("../");

var _reactRedux = require("react-redux");

var _configSlice = require("../../LayoutEditor/configSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
// Theme
// Toolbar icons
// Editor styles
// importing the plugin js.
//Style overrides Override
function RichTextInput(_ref) {
  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      toolbar = _ref.toolbar,
      labelHidden = _ref.labelHidden,
      helpText = _ref.helpText,
      onChange = _ref.onChange;
  var cssClasses = (0, _reactRedux.useSelector)(_configSlice.selectCssClasses),
      defaultToolbar = ['undo redo bold italic | bullist numlist | superscript subscript | removeformat'];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.FieldLabel, {
    htmlFor: name,
    visuallyHidden: labelHidden
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    id: "toolbar",
    style: {
      height: '2em'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '0.5rem',
      border: '1px solid #757575'
    }
  }, /*#__PURE__*/_react.default.createElement(_tinymceReact.Editor, {
    init: {
      selector: 'textarea#default',
      menubar: false,
      inline: true,
      skin: false,
      browser_spellcheck: true,
      contextmenu: false,
      toolbar: toolbar || defaultToolbar,
      fixed_toolbar_container: '#toolbar',
      toolbar_persist: true,
      plugins: 'quickbars link autolink lists paste',
      link_context_toolbar: true,
      link_quicklink: true,
      link_title: false,
      link_default_protocol: 'https',
      quickbars_insert_toolbar: false,
      quickbars_selection_toolbar: 'bold italic | quicklink',
      valid_elements: 'p,ul,ol,li,strong,em,sup,sub,a[href]'
    },
    onEditorChange: onChange,
    value: value || ''
  })), helpText && /*#__PURE__*/_react.default.createElement("span", {
    className: cssClasses['help-text']
  }, ' ', helpText, ' '));
}

var _default = RichTextInput;
exports.default = _default;