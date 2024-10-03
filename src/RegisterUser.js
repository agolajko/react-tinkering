import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault(); // Prevent the form from submitting traditionally
        try {
            const response = await axios.post('/api/register', { username, password });
            console.log('Registration successful:', response.data);
            // Handle successful registration (e.g., redirect to login page)
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration error (e.g., display error message)
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg max-w-md w-full">

            <form onSubmit={registerUser}>
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
                >Register</button>
            </form>
        </div>

    );
}

export default Register;