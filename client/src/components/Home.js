import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const Home = ({ loader }) => {
    return (
        <>
            <Helmet>
                <title>Home - MERN Website</title>
            </Helmet>
            <div className="home-container">
                <div className="home-container-grid">
                    <p className="home-greeting">WELCOME</p>
                    <h1 className="home-greeting-heading"><Link to="/signin" className="home-greeting-heading" onClick={loader}>Sign In</Link> to Get your Profile</h1>
                </div>
            </div>
        </>
    )
}

export default Home
