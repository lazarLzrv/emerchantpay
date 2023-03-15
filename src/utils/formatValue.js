export const formatValue = (amount, currency) => {
    const dec = (parseFloat(amount) / 100).toFixed(2);
    return dec + " " + currency;
};
