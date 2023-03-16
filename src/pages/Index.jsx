import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import useJson from "../api/useJson";
import { trimAfterCapital, formatErrorClass, formatValue, formatDate } from "../utils";

const Index = () => {
    const { getTransactions } = useJson();
    const transactions = useSelector((state) => state.transactions.all);

    const [data, setData] = useState([]);
    useEffect(() => {
        getTransactions();
    }, []);
    useEffect(() => {
        if (transactions.length > 0) {
            const arr = transactions.map((item) => {
                return { ...item, amount: { amount: item.amount, currency: item.currency } };
            });
            setData(arr);
        }
    }, [transactions]);

    const columns = [
        { label: "Id", name: "id" },
        { label: "Status", name: "status" },
        { label: "When", name: "created_at" },
        { label: "Merchant", name: "merchant_name" },
        { label: "Terminal", name: "terminal_name" },
        { label: "Type", name: "type" },
        { label: "Error", name: "error_class" },
        { label: "Client", name: "card_holder" },
        { label: "Card Number", name: "card_number" },
        { label: "Amount", name: "amount" },
    ];

    const formatTdData = (value, name) => {
        if (name === "created_at") {
            return formatDate(value);
        } else if (name === "type") {
            return trimAfterCapital(value);
        } else if (name === "error_class") {
            return formatErrorClass(value);
        } else if (name === "amount") {
            return formatValue(value.amount, value.currency);
        } else {
            return value;
        }
    };
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <table className='table table-striped'>
                        <thead className='text-capitalize'>
                            <tr>
                                {columns.map(({ name, label }) => {
                                    return (
                                        <th key={name} scope='col'>
                                            {label}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        {columns.map(({ name }) => {
                                            return (
                                                <td key={name}>{formatTdData(data[name], name)}</td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;
