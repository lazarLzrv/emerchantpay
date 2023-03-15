import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import useJson from "../api/useJson";
import { trimAfterCapital, formatErrorClass, formatValue, formatDate } from "../utils";

const Index = () => {
    const { getTransactions } = useJson();
    const list = useSelector((state) => state.transactions.all);

    useEffect(() => {
        getTransactions();
    }, []);

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
        { label: "Currency", name: "currency" },
    ];

    const formatTdData = (text, name, currency = "") => {
        if (name === "created_at") {
            return formatDate(text);
        } else if (name === "type") {
            return trimAfterCapital(text);
        } else if (name === "error_class") {
            return formatErrorClass(text);
        } else if (name === "amount") {
            return formatValue(text, currency);
        } else {
            return text;
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
                                    if (name !== "currency") {
                                        return (
                                            <th key={name} scope='col'>
                                                {label}
                                            </th>
                                        );
                                    }
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((data) => {
                                let currency = data.currency;
                                return (
                                    <tr key={data.id}>
                                        {columns.map(({ name }) => {
                                            if (name !== "currency") {
                                                return (
                                                    <td key={name}>
                                                        {formatTdData(data[name], name, currency)}
                                                    </td>
                                                );
                                            }
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
