import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import logo from './myntra logo.jpg'; 

const HomePage = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]);

    return (
        <div className="container">
            <img src={logo} alt="Myntra Logo" className="logo" />
            <h2 className="heading"><i>MYNTRA VIRTUAL MEET</i></h2> {/* Use the heading class */}
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text"
                placeholder="Enter Room Code"
                className="input"
            />
            <button onClick={handleJoinRoom} className="button">
                JOIN
            </button>
        </div>
    );
};

export default HomePage;
