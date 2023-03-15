export const trimAfterCapital = (text) => {
    return text.replace(/([A-Z])[a-z]*$/, "");
};
