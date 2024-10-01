import React from 'react';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: '#333',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <div style={{ color: 'white', fontWeight: 'bold' }}>Professional software</div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                margin: 0,
                padding: 0
            }}>
                <li style={{ margin: '0 10px' }}><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                <li style={{ margin: '0 10px' }}><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
                <li style={{ margin: '0 10px' }}><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;