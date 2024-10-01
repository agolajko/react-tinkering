import React, { useState } from 'react';

const SignUpModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        // Here you would typically send the email to your backend
        setEmail('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-gray-200 text-gray-800 p-2 rounded hover:bg-gray-300 transition duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SignUpModal;