'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getTime = require('date-fns/getTime');

var _getTime2 = _interopRequireDefault(_getTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date) {
    return (0, _getTime2.default)(date);
};