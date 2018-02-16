'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _startOfDay = require('date-fns/startOfDay');

var _startOfDay2 = _interopRequireDefault(_startOfDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date) {
    return (0, _startOfDay2.default)(date);
};