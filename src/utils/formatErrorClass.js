import { trimAfterCapital } from "./index";

export const formatErrorClass = (text) => {
    if (text === "") {
        return "Unknown";
    } else {
        let t = text.replace("Module::", "");
        return trimAfterCapital(t);
    }
};
