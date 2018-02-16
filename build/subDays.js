'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _subDays = require('date-fns/subDays');

var _subDays2 = _interopRequireDefault(_subDays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date, amount) {
    return (0, _subDays2.default)(date, amount);
};