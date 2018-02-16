'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formatDistance = require('date-fns/formatDistance');

var _formatDistance2 = _interopRequireDefault(_formatDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const locales = {
//     es: require('date-fns/locale/es'),
// };

exports.default = function (from) {
    return (0, _formatDistance2.default)(new Date(), from, {
        // locale: locales['es'],
        addSuffix: true
    });
};