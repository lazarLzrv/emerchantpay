import { SET_TRANSACTIONS } from "../constants";

// transactions

const initialState = {
    all: [],
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_TRANSACTIONS:
            return {
                ...state,
                all: payload,
            };

        default:
            return state;
    }
};

export default reducer;
