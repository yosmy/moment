'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _endOfMonth = require('date-fns/endOfMonth');

var _endOfMonth2 = _interopRequireDefault(_endOfMonth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date) {
    return (0, _endOfMonth2.default)(date);
};