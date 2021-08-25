import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";

const Contact = ({ loader }) => {
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
    const contactUs = async () => {
        try {
            const res = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const user = await res.json();
            setUserData({ ...userData, name: user.name, email: user.email, phone: user.phone });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            window.alert(err)
        }
    }

    useEffect(() => {
        contactUs();
    }, []);

    let name, value;
    const handleOnChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userData;

        const res = await fetch("/contact", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ name, email, phone, message })
        });

        const data = await res.json();

        if (!data || res.status !== 201) {
            if (data.message === "Unauthorized: No token provided") {
                return alert("You must be sign in to contact us")
            }
            window.alert(data.message);
        } else {
            window.alert(data.message);
            setUserData({ ...userData, message: "" });
        }
    }

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
                        <form className="side-menu" method="post" onSubmit={handleOnSubmit}>
                            <div className="form-fields">
                                <input type="text" className="form-fields-inputs form-control" placeholder="Enter your Name" required name="name" value={userData.name} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <input type="email" className="form-fields-inputs form-control" placeholder="Enter your Email" required name="email" value={userData.email} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <input type="number" className="form-fields-inputs form-control" placeholder="Enter your Phone Number" name="phone" required value={userData.phone} onChange={handleOnChange} />
                            </div>
                            <div className="form-fields">
                                <textarea name="message" id="issue-textarea-contact" cols="30" rows="10" className="form-fields-inputs form-control" style={style} placeholder="Write Message here" required value={userData.message} onChange={handleOnChange}></textarea>
                            </div>
                            <div className="form-fields">
                                <input type="submit" className="form-fields-inputs btn btn-outline-success" value="Send Message" onClick={loader} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
