import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function IndexPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/transactions')
            .then(response => setTransactions(response.data))
            .catch(error => console.log(error));
    }, []);

    const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);

    return (
        <div>
            <h2>Bank Account Total: {totalAmount}</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
                        {transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IndexPage;
