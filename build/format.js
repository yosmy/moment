'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const locales = {
//     es: require('date-fns/locale/es'),
// };

exports.default = function (date, format) {
    return (0, _format2.default)(date, format, {
        // locale: locales['es']
    });
};