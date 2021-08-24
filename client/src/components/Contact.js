import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";

const Contact = ({ loader }) => {
    const [data, setData] = useState({});
    const callAboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });

            const UserData = await res.json();
            setData(UserData);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    const style = {
        resize: "none"
    }
    return (
        <>
            <Helmet>
                <title>Contact Us - MERN Website</title>
            </Helmet>
            <div className="container-center my-2">
                <div className="login-container container">
                    <div className="heading text-center my-4" >
                        <h1>Contact Us</h1>
                    </div>
                    <div className="login-grid-container">
                        <div className="image">
                            <img src="Images/contact.png" alt="Contact us" className="image-content-img card-img top" />
                        </div>
                        <form className="side-menu">
                            <div className="form-fields">
                                <input type="text" className="form-fields-inputs form-control" placeholder="Enter your Name" required name="name" />
                            </div>
                            <div className="form-fields">
                                <input type="email" className="form-fields-inputs form-control" placeholder="Enter your Email" required name="emial" />
                            </div>
                            <div className="form-fields">
                                <input type="number" className="form-fields-inputs form-control" placeholder="Enter your Phone Number" name="phone" required />
                            </div>
                            <div className="form-fields">
                                <textarea name="issue" id="issue-textarea-contact" cols="30" rows="10" className="form-fields-inputs form-control" style={style} placeholder="Write your Issue" required></textarea>
                            </div>
                            <div className="form-fields">
                                <input type="button" className="form-fields-inputs btn btn-outline-success" value="Submit" onClick={loader} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
