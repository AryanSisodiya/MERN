import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ loader }) => {
    return (
        <div className="notFound">
            <h1 className="notFound-heading">404</h1>
            <p className="notFound-desc">The requested url ({window.location.pathname}) was not found on the server... <Link to="/" onClick={loader}>Go to the Home page</Link> </p>
        </div>
    )
}

export default NotFoundPage
