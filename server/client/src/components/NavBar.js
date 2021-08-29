import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { UserContext } from '../App';

const NavBar = ({ loader }) => {
    const { state, dispatch } = React.useContext(UserContext);
    const ToggleLogin = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout" onClick={loader}>Logout</Link>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin" onClick={loader}>Login</Link>
                    </li>
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MERN Website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={loader}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={loader}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={loader}>Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register" onClick={loader}>Register</Link>
                            </li>
                            <ToggleLogin />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
