import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>Budget App</h1>
            <Link to="/new">New Transaction</Link>
        </nav>
    );
}

export default Navbar;
