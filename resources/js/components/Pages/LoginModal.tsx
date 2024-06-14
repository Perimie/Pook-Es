import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [password, setPassword] = useState('');

    const toggleShowPass = () => {
        setShowPass(!showPass);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setPassword(input);
        setShowButton(input.length > 0);
    };

    if (!isOpen) return null;

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add logic to handle login
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-6 rounded-lg bg-white">
                <h1 className="text-3xl mb-4 text-center text-black">Login</h1>
                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <div className="w-72">
                        <Input 
                            color="purple" 
                            label="Username" 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-72 mt-4">
                        <Input
                            color="purple"
                            label="Password"
                            type={showPass ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {showButton && (
                            <div className="flex items-center mt-2 ml-2">
                                <input
                                    type="checkbox"
                                    id="show-password"
                                    checked={showPass}
                                    onChange={toggleShowPass}
                                    className="mr-2"
                                />
                                <label htmlFor="show-password" className="text-sm text-black">
                                    Show Password
                                </label>
                            </div>
                        )}
                    </div>
                    <div className='mb-2 ml-44'>
                        <a className="link link-neutral text-sm">Forgot Password?</a>
                    </div>
                    <div className="flex justify-end flex-col gap-2">
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-800 ease-out duration-300 text-white rounded"
                        >
                            Login
                        </button>
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="px-4 py-2 bg-red-500 hover:bg-red-800 ease-out duration-300 text-white rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
