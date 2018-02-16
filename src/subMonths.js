import subMonths from 'date-fns/subMonths';

export default (date, amount) => {
    return subMonths(
        date,
        amount
    );
};
