import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const Home = ({ loader }) => {
    const [userName, setUserName] = useState("");
    const homePage = async () => {
        try {
            const res = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const user = await res.json();
            setUserName(user.name);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            window.alert(err)
        }
    }

    useEffect(() => {
        homePage();
    }, []);
    return (
        <>
            <Helmet>
                <title>Home - MERN Website</title>
            </Helmet>
            <div className="home-container">
                <div className="home-container-grid">
                    <p className="home-greeting">WELCOME</p>
                    {!userName ?
                        <h1 className="home-greeting-heading"><Link to="/signin" className="home-greeting-heading" onClick={loader}>Sign In</Link> to Get your Profile</h1>
                        :
                        <>
                            <h1 className="home-user-heading">{userName}</h1>
                            <h1 className="home-greeting-heading mt-2">Happy to See you back</h1>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Home
