import React from 'react';
import logo from './logo.svg';
import Register from './RegisterUser';

const Home = () => {
    return (
        <header className="App-header">
            <p>
                Home of the best software for this niche usecase the world has seen!
            </p>

            <Register />

        </header>
    );
};

export default Home;