'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _endOfDay = require('date-fns/endOfDay');

var _endOfDay2 = _interopRequireDefault(_endOfDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date) {
    return (0, _endOfDay2.default)(date);
};