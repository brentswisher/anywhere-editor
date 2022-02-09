"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageControl = ImageControl;
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

function ImageControl(_ref) {
  var src = _ref.src,
      sizes = _ref.sizes,
      alt = _ref.alt,
      title = _ref.title,
      hasUpload = _ref.hasUpload,
      caption = _ref.caption,
      captionPosition = _ref.captionPosition,
      mobilePosition = _ref.mobilePosition,
      border = _ref.border,
      thumbnailPath = _ref.thumbnailPath,
      setData = _ref.setData;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1],
      toggleEditable = function toggleEditable() {
    return setEditing(!editing);
  },
      displaySrc = (thumbnailPath !== '' ? "".concat(thumbnailPath, "/") : '') + src[sizes[sizes.length - 1]];

  if (editing) {
    return /*#__PURE__*/_react.default.createElement(ImageEditor, {
      setData: setData,
      src: src,
      thumbnailPath: thumbnailPath,
      hasUpload: hasUpload,
      sizes: sizes,
      alt: alt,
      caption: caption,
      captionPosition: captionPosition,
      mobilePosition: mobilePosition,
      border: border,
      toggleEditable: toggleEditable,
      title: title
    });
  }

  return /*#__PURE__*/_react.default.createElement(ImageDisplay, {
    src: displaySrc,
    alt: alt,
    title: title,
    hasUpload: hasUpload,
    caption: caption,
    captionPosition: captionPosition,
    mobilePosition: mobilePosition,
    border: border,
    onClick: toggleEditable
  });
}

ImageControl.defaultProps = {
  src: {},
  sizes: [500, 770, 1200, 2000],
  alt: '',
  title: '',
  thumbnailPath: '',
  hasUpload: false,
  caption: '',
  captionPosition: 'right',
  mobilePosition: 'full',
  border: '',
  editing: false
};

function ImageEditor(props) {
  var _useState3 = (0, _react.useState)(props.title),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1],
      _useState5 = (0, _react.useState)(props.src),
      _useState6 = _slicedToArray(_useState5, 2),
      src = _useState6[0],
      setSrc = _useState6[1],
      _useState7 = (0, _react.useState)(props.alt),
      _useState8 = _slicedToArray(_useState7, 2),
      alt = _useState8[0],
      setAlt = _useState8[1],
      _useState9 = (0, _react.useState)(props.caption),
      _useState10 = _slicedToArray(_useState9, 2),
      caption = _useState10[0],
      setCaption = _useState10[1],
      _useState11 = (0, _react.useState)(props.captionPosition),
      _useState12 = _slicedToArray(_useState11, 2),
      captionPosition = _useState12[0],
      setCaptionPosition = _useState12[1],
      _useState13 = (0, _react.useState)(props.mobilePosition),
      _useState14 = _slicedToArray(_useState13, 2),
      mobilePosition = _useState14[0],
      setMobilePosition = _useState14[1],
      _useState15 = (0, _react.useState)(props.border),
      _useState16 = _slicedToArray(_useState15, 2),
      border = _useState16[0],
      setBorder = _useState16[1],
      _useState17 = (0, _react.useState)(props.hasUpload),
      _useState18 = _slicedToArray(_useState17, 2),
      hasUpload = _useState18[0],
      setHasUpload = _useState18[1],
      _useState19 = (0, _react.useState)(''),
      _useState20 = _slicedToArray(_useState19, 2),
      error = _useState20[0],
      setError = _useState20[1],
      saveChanges = function saveChanges(e) {
    e.preventDefault();

    if (src && !alt.length) {
      setError('Please enter an alt text to continue');
    } else {
      props.setData({
        title: title,
        src: src,
        thumbnailPath: props.thumbnailPath,
        alt: alt,
        caption: caption,
        captionPosition: captionPosition,
        mobilePosition: mobilePosition,
        border: border,
        hasUpload: hasUpload
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
  }, /*#__PURE__*/_react.default.createElement(_Inputs.ImageInput, {
    name: "image",
    label: "Image",
    src: src,
    sizes: props.sizes,
    thumbnailPath: props.thumbnailPath,
    uploadCallback: setHasUpload,
    onChange: setSrc,
    setError: setError
  }), /*#__PURE__*/_react.default.createElement(_Inputs.TextInput, {
    name: "alt",
    label: "Alt Text:",
    value: alt,
    onChange: setAlt
  }), /*#__PURE__*/_react.default.createElement(_Inputs.RichTextInput, {
    name: "caption",
    label: "Caption:",
    value: caption,
    onChange: setCaption
  }), /*#__PURE__*/_react.default.createElement(_Inputs.SelectInput, {
    name: "captionPosition",
    label: "Caption Alignment",
    value: captionPosition,
    options: [{
      value: 'left',
      title: 'Left'
    }, {
      value: 'right',
      title: 'Right'
    }, {
      value: 'center',
      title: 'Centered'
    }],
    onChange: setCaptionPosition
  }), /*#__PURE__*/_react.default.createElement(_Inputs.SelectInput, {
    name: "mobilePosition",
    label: "Mobile Position",
    value: mobilePosition,
    options: [{
      value: 'full',
      title: 'Full Screen'
    }, {
      value: 'match',
      title: 'Match Desktop Position'
    }],
    onChange: setMobilePosition
  }), /*#__PURE__*/_react.default.createElement(_Inputs.SelectInput, {
    name: "photoBorder",
    label: "Border",
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
  }), /*#__PURE__*/_react.default.createElement(_Inputs.TextInput, {
    name: "title",
    label: "Heading:",
    value: title,
    onChange: setTitle
  }));
}

function ImageDisplay(props) {
  var cssClasses = (0, _reactRedux.useSelector)(_configSlice.selectCssClasses),
      classList = [cssClasses['photo']];

  if (props.mobilePosition) {
    classList.push(cssClasses["photo-mobile-".concat(props.mobilePosition)]);
  }

  if (props.border) {
    // classString += ` border-${ props.border }`;
    classList.push(cssClasses["border-".concat(props.border)]);
  }

  if (props.src) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classList.join(' '),
      onClick: props.onClick
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "hidden",
      value: props.src,
      name: "photoId"
    }), props.title && /*#__PURE__*/_react.default.createElement("h2", {
      className: cssClasses['content-heading']
    }, props.title), /*#__PURE__*/_react.default.createElement("img", {
      src: props.src,
      alt: props.alt
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(cssClasses['photo-caption'], "  ").concat(cssClasses['text-' + props.captionPosition]),
      dangerouslySetInnerHTML: {
        __html: props.caption
      }
    }));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: cssClasses['no-drop-cap']
  }, "[Click here to upload ", props.label, " ]"), /*#__PURE__*/_react.default.createElement("br", null));
}

var _default = ImageControl;
exports.default = _default;