import subDays from 'date-fns/subDays';

export default (date, amount) => {
    return subDays(
        date,
        amount
    );
};
