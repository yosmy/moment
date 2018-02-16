'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _addDays = require('date-fns/addDays');

var _addDays2 = _interopRequireDefault(_addDays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date, amount) {
    return (0, _addDays2.default)(date, amount);
};