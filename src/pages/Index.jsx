import { useEffect } from "react";
import { useSelector } from "react-redux";

import useJson from "../api/useJson";

const Index = () => {
    const { getTransactions } = useJson();

    const list = useSelector((state) => state.transactions.all);
    console.log(list);

    useEffect(() => {
        getTransactions();
    }, []);
    return "test";
};

export default Index;
