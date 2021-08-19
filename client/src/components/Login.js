import React from 'react'

const Login = () => {

    return (
        <div className="container-center">
            <div className="login-container">
                <div className="heading text-center my-4" >
                    <h1>Sign Up For Free Now!</h1>
                </div>
                <div className="login-grid-container">
                    <div className="image">
                        <img src="Images/img-login.svg" alt="Login" className="image-content-img card-img top" />
                    </div>
                    <form className="side-menu">
                        <div className="form-fields">
                            <input type="text" className="form-fields-inputs form-control" placeholder="Enter your Name" required />
                        </div>
                        <div className="form-fields">
                            <input type="email" className="form-fields-inputs form-control" placeholder="Enter your Email" required />
                        </div>
                        <div className="form-fields">
                            <input type="number" className="form-fields-inputs form-control" placeholder="Enter your Phone Number" required />
                        </div>
                        <div className="form-fields">
                            <input type="text" className="form-fields-inputs form-control" placeholder="Enter your Work" required />
                        </div>
                        <div className="form-fields">
                            <input type="password" className="form-fields-inputs form-control" placeholder="Enter your Password" autoComplete="Your Password here!" required />
                        </div>
                        <div className="form-fields">
                            <input type="password" className="form-fields-inputs form-control" placeholder="Confirm Password" autoComplete="Your Password here!" required />
                        </div>
                        <div className="form-fields">
                            <input type="button" className="form-fields-inputs btn btn-outline-success" value="Sign Up!!" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
