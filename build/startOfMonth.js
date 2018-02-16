'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _startOfMonth = require('date-fns/startOfMonth');

var _startOfMonth2 = _interopRequireDefault(_startOfMonth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date) {
    return (0, _startOfMonth2.default)(date);
};