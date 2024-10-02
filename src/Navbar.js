import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUpModal from './SignUpModal';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Expose the setIsModalOpen function to the window object
        window.openSignUpModal = () => setIsModalOpen(true);

        // Cleanup function to remove the exposed function when component unmounts
        return () => {
            delete window.openSignUpModal;
        };
    }, []);

    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-xl">My React App</div>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-white hover:text-gray-300 transition duration-200">Home</Link></li>
                        <li><Link to="/about" className="text-white hover:text-gray-300 transition duration-200">About</Link></li>
                        <li><Link to="/contact" className="text-white hover:text-gray-300 transition duration-200">Contact</Link></li>
                    </ul>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>
            <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;