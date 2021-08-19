import React from 'react';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const style = {
        marginBottom: "0 !important"
    }
    return (
        <>
            <Helmet>
                <title>Sign In - MERN Website</title>
            </Helmet>
            <div className="container-center my-2">
                <div className="login-container container">
                    <div className="heading text-center my-2" style={style}>
                        <h1>Sign In</h1>
                    </div>
                    <div className="login-grid-container">
                        <div className="image">
                            <img src="Images/img-login.svg" alt="Sign up" className="image-content-img card-img top" />
                        </div>
                        <form className="side-menu">
                            <div className="form-fields">
                                <input type="email" className="form-fields-inputs form-control" placeholder="Enter your Email" name="email" required />
                            </div>
                            <div className="form-fields">
                                <input type="password" className="form-fields-inputs form-control" placeholder="Enter your Password" name="password" autoComplete="Your Password here!" required />
                            </div>
                            <div className="form-fields">
                                <input type="button" className="form-fields-inputs btn btn-outline-success" value="Sign In" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
