import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: '#333',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <div style={{ color: 'white', fontWeight: 'bold' }}>My React App</div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                margin: 0,
                padding: 0
            }}>
                <li style={{ margin: '0 10px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
                <li style={{ margin: '0 10px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
                <li style={{ margin: '0 10px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;