'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Props = undefined;

var _isFinite = require('babel-runtime/core-js/number/is-finite');

var _isFinite2 = _interopRequireDefault(_isFinite);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpfrpt_proptype_Props = {
  delay: _propTypes2.default.number,
  render: _propTypes2.default.func,
  children: _propTypes2.default.func
};

var Interval = function (_React$Component) {
  (0, _inherits3.default)(Interval, _React$Component);

  function Interval() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Interval);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Interval.__proto__ || (0, _getPrototypeOf2.default)(Interval)).call.apply(_ref, [this].concat(args))), _this), _this._intervalID = null, _this.state = {
      delay: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Interval, [{
    key: '_stop',
    value: function _stop() {
      if (this._intervalID != null) {
        clearInterval(this._intervalID);
        this._intervalID = null;
      }
    }
  }, {
    key: '_start',
    value: function _start(delay) {
      var _this2 = this;

      if (delay != null && (0, _isFinite2.default)(delay)) {
        this._intervalID = setInterval(function () {
          return _this2.forceUpdate();
        }, delay);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._start(this.props.delay);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.delay !== this.state.delay) {
        this._stop();
        this._start(this.state.delay);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._stop();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          render = _props.render,
          children = _props.children;

      if (children) return normalizeNull(children());
      if (render) return normalizeNull(render());
      return null;
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.delay !== nextProps.delay) {
        return { delay: nextProps.delay };
      }
      return null;
    }
  }]);
  return Interval;
}(React.Component);

Interval.propTypes = {
  delay: _propTypes2.default.number,
  render: _propTypes2.default.func,
  children: _propTypes2.default.func
};
exports.default = Interval;


function normalizeNull(value) {
  if (value == null) return null;
  return value;
}
exports.bpfrpt_proptype_Props = bpfrpt_proptype_Props;