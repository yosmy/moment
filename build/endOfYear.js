'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _endOfYear = require('date-fns/endOfYear');

var _endOfYear2 = _interopRequireDefault(_endOfYear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (date) {
    return (0, _endOfYear2.default)(date);
};