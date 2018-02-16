import formatDistance from 'date-fns/formatDistance';

// const locales = {
//     es: require('date-fns/locale/es'),
// };

export default (from) => {
    return formatDistance(
        new Date(),
        from,
        {
            // locale: locales['es'],
            addSuffix: true
        }
    );
};
