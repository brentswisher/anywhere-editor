"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditModal = EditModal;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _reactRedux = require("react-redux");

var _configSlice = require("../LayoutEditor/configSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EditModal(_ref) {
  var error = _ref.error,
      saveChanges = _ref.saveChanges,
      cancelChanges = _ref.cancelChanges,
      children = _ref.children,
      appElement = _ref.appElement;

  _reactModal.default.setAppElement('#publication-editor');

  var cssClasses = (0, _reactRedux.useSelector)(_configSlice.selectCssClasses);
  return /*#__PURE__*/_react.default.createElement(_reactModal.default, {
    isOpen: true,
    contentLabel: "Edit Sidebar Modal Window",
    className: cssClasses['modal'],
    overlayClassName: cssClasses['modal-overlay'],
    onRequestClose: cancelChanges
  }, error && /*#__PURE__*/_react.default.createElement("div", {
    className: cssClasses['error-container']
  }, error), children, /*#__PURE__*/_react.default.createElement("div", {
    className: cssClasses['button-group']
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: saveChanges,
    className: cssClasses['button-primary']
  }, "Update"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: cancelChanges,
    className: cssClasses['button-secondary']
  }, "Cancel")));
}

EditModal.defaultProps = {
  appElement: '#react-root'
};
var _default = EditModal;
exports.default = _default;