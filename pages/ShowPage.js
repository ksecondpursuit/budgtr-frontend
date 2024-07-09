import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';

function ShowPage() {
    const { id } = useParams();
    const [transaction, setTransaction] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/transactions/${id}`)
            .then(response => setTransaction(response.data))
            .catch(error => console.log(error));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/transactions/${id}`)
            .then(() => history.push('/'))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h2>{transaction.item_name}</h2>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>From: {transaction.from}</p>
            <p>Category: {transaction.category}</p>
            <Link to={`/transactions/${id}/edit`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ShowPage;
