'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _startOfYear = require('date-fns/startOfYear');

var _startOfYear2 = _interopRequireDefault(_startOfYear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date) {
    return (0, _startOfYear2.default)(date);
};