import baseFormat from 'date-fns/format';

// const locales = {
//     es: require('date-fns/locale/es'),
// };

export default (date, format) => {
    return baseFormat(
        date,
        format,
        {
            // locale: locales['es']
        }
    );
};
