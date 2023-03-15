import Actions from "../redux/actions/transactions";

const useJson = () => {
    const { setTransactions } = Actions();
    const getTransactions = async () => {
        return fetch("data.json")
            .then((res) => res.json())
            .then((res) => {
                setTransactions(res.payment_transactions);
            });
    };

    return {
        getTransactions,
    };
};

export default useJson;
