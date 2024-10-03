// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('test');
    const [password, setPassword] = useState('test');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Login form submitted:', username, password);
        try {
            const response = await axios.post('/api/login', { username, password });
            console.log('Login successful:', response.data.token);
            login(response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    // Render login form
    return (
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-half p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-half p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-half bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >Login</button>
            </form>
        </div>
    );
}

