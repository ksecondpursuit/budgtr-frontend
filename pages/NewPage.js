import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function NewPage() {
    const [formData, setFormData] = useState({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/transactions', formData)
            .then(response => history.push(`/transactions/${response.data.id}`))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h2>Add a new item</h2>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input type="text" name="date" value={formData.date} onChange={handleChange} />
                <label>Name</label>
                <input type="text" name="item_name" value={formData.item_name} onChange={handleChange} />
                <label>Amount</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
                <label>From</label>
                <input type="text" name="from" value={formData.from} onChange={handleChange} />
                <label>Category</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} />
                <button type="submit">Create New Item</button>
            </form>
        </div>
    );
}

export default NewPage;
