import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditPage() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: ''
    });
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/transactions/${id}`)
            .then(response => setFormData(response.data))
            .catch(error => console.log(error));
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/transactions/${id}`, formData)
            .then(() => history.push(`/transactions/${id}`))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h2>Edit item</h2>
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
                <button type="submit">Update Item</button>
            </form>
        </div>
    );
}

export default EditPage;
