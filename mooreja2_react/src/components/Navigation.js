import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <Link to="/" className="link">Home Page</Link>
            <Link to="/add-exercise" className="link">Add Exercise Page</Link>
        </>
    );
}

export default Navigation;