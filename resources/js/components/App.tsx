import React, { useState, useEffect } from 'react';
import LoginModal from './Pages/LoginModal';
import Homepage from './Pages/Homepage';
import EditProfile from './Pages/EditProfile';



const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'F9') {
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="App">
            <Homepage/>
            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            {/* <EditProfile/> */}
        </div>

    );
};

export default App;