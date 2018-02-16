'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _subMonths = require('date-fns/subMonths');

var _subMonths2 = _interopRequireDefault(_subMonths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date, amount) {
    return (0, _subMonths2.default)(date, amount);
};