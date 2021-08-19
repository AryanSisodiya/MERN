import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-grid">
                <p className="home-greeting">WELCOME</p>
                <h1 className="home-greeting-heading"><Link to="/login" className="home-greeting-heading">Sign In</Link> to Get your Profile</h1>
            </div>
        </div>
    )
}

export default Home
