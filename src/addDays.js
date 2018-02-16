import addDays from 'date-fns/addDays';

export default (date, amount) => {
    return addDays(
        date,
        amount
    );
};
