import React, { useState, useEffect } from 'react';
import App from '../App';
import './intro.css';

const Intro = () => {
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMain(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="intro-container">
            <div className="typing">
                <span class="big" style={{fontSize: "50px", color: 'orange'}}> Welcome to Evening Entertainment  </span>
                <span class="small" style={{fontSize: "20px", color: 'orange'}}> Welcome to Evening Entertainment </span>

            </div>


            {showMain && (
                <div className="app-container fade-in">
                    <div className="app">{App}</div>
                </div>
            )}
        </div>
    );
};

export default Intro;
