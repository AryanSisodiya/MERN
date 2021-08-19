import React from 'react'

const Signup = () => {
    return (
        <div className="container-center my-2">
            <div className="login-container container">
                <div className="heading text-center my-4" >
                    <h1>Sign Up For Free Now!</h1>
                </div>
                <div className="login-grid-container">
                    <div className="image">
                        <img src="Images/signup.svg" alt="Sign up" className="image-content-img card-img top" />
                    </div>
                    <form className="side-menu">
                        <div className="form-fields">
                            <input type="text" className="form-fields-inputs form-control" placeholder="Enter your Name" name="name" required />
                        </div>
                        <div className="form-fields">
                            <input type="email" className="form-fields-inputs form-control" placeholder="Enter your Email" name="email" required />
                        </div>
                        <div className="form-fields">
                            <input type="number" className="form-fields-inputs form-control" placeholder="Enter your Phone Number" name="phone" required />
                        </div>
                        <div className="form-fields">
                            <input type="text" className="form-fields-inputs form-control" placeholder="Enter your Work" name="work" required />
                        </div>
                        <div className="form-fields">
                            <input type="password" className="form-fields-inputs form-control" placeholder="Enter your Password" name="password" autoComplete="Your Password here!" required />
                        </div>
                        <div className="form-fields">
                            <input type="password" className="form-fields-inputs form-control" placeholder="Confirm Password" name="cpassword" autoComplete="Your Password here!" required />
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

export default Signup
