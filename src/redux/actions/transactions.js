import { SET_TRANSACTIONS } from "../constants";
import { useDispatch } from "react-redux";

const Actions = () => {
    const dispatch = useDispatch();

    const setTransactions = (payload) => {
        dispatch({
            type: SET_TRANSACTIONS,
            payload,
        });
    };

    return {
        setTransactions,
    };
};

export default Actions;
