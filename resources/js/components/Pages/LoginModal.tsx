import React, { useState } from 'react';


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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-base-100 p-6 rounded-lg  ">
                <h1 className="text-3xl mb-4 text-center text-white">Login</h1>
                {/* Login FOrm */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white">Username</label>
                        <input
                            placeholder='Input Username' 
                            type="text" 
                            className="w-full px-3 py-2 border rounded text-black" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-0 relative color">
                            <label className="block text-white">Password</label>
                            <input 
                                placeholder='Password'
                                type={showPass ? 'text' : 'password'}
                                className="w-full px-3 py-2 border rounded text-black" 
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {showButton && (
                        <button
                        className="absolute right-2 top-3"
                        onClick={toggleShowPass}
                        >
                        {showPass ? (
                            <svg
                            width={20}
                            height={20}
                            className="mt-6"
                            fill="none"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
                            </svg>
                        ) : (
                            <svg
                            width={20}
                            height={20}
                            className="mt-6"
                            fill="none"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                            <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                            <path d="m1 1 22 22" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                            </svg>
                        )}
                        </button>
                    )}
                    
                    </div>
                    <div className='ml-24 mb-2'>
                        <a  className=" link link-neutral text-sm">Forgot Password?</a>
                    </div>
                    
                    
                    <div className="flex justify-end flex-col gap-2">

                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-800 ease-out duration-300 text-white rounded "
                        >
                            Login
                        </button>
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className=" px-4 py-2 bg-red-500 hover:bg-red-800    ease-out duration-300 text-white rounded"
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