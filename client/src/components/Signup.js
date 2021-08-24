import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";

const Signup = ({ loader }) => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    });

    let name, value;
    const handleOnChange = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleOnSubmit = async () => {
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, phone, work, password, cpassword })
        });
        const resp = await res.json();
        if (res.status === 201) {
            window.alert(resp.message);
            history.push("/signin")
        } else {
            window.alert(resp.message)
        }
    }

    return (
        <>
            <Helmet>
                <title>Sign Up For Free - MERN Website</title>
            </Helmet>
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
                                <input type="text" className="form-fields-inputs form-control" placeholder="Enter your Name" name="name" required value={user.name} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <input type="email" className="form-fields-inputs form-control" placeholder="Enter your Email" name="email" required value={user.email} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <input type="number" className="form-fields-inputs form-control" placeholder="Enter your Phone Number" name="phone" required value={user.phone} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <input type="text" className="form-fields-inputs form-control" placeholder="Enter your Work" name="work" required value={user.work} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <input type="password" className="form-fields-inputs form-control" placeholder="Enter your Password" name="password" autoComplete="Your Password here!" required value={user.password} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <input type="password" className="form-fields-inputs form-control" placeholder="Confirm Password" name="cpassword" autoComplete="Your Password here!" required value={user.cpassword} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <input type="button" className="form-fields-inputs btn btn-outline-success" value="Sign Up!!" onClick={() => { loader(); handleOnSubmit() }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
