import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';

const Login = ({ loader }) => {
    const { state, dispatch } = React.useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const style = {
        marginBottom: "0 !important"
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid credentials");
        } else {
            dispatch({ type: "USER", payload: true })
            window.alert("Logined successfully");
            history.push("/", { replace: true });
        }
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
                        <form className="side-menu" method="POST" onSubmit={loginUser}>
                            <div className="form-fields">
                                <input type="email" className="form-fields-inputs form-control" placeholder="Enter your Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-fields">
                                <input type="password" className="form-fields-inputs form-control" placeholder="Enter your Password" name="password" autoComplete="Your Password here!" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-fields">
                                <input type="submit" className="form-fields-inputs btn btn-outline-success" value="Sign In" onClick={loader} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
