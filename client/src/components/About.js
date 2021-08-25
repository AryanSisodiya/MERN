import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";

const About = () => {
    const [data, setData] = useState({});
    const history = useHistory();
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
            history.push("/signin")
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    const imgStyle = {
        height: "inherit",
        width: "-webkit-fill-available"
    }

    const colMd6Style = {
        "alignSelf": "center"
    }

    return (
        <>
            <div className="container emp-profile my-4">
                <form method="get">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={data.name === "Aryan Sisodiya" ? "Images/aryan.jpg" : "Images/profile.png"} alt="User pic" style={imgStyle} />
                        </div>
                        <div className="col-md-6" style={colMd6Style}>
                            <div className="profile-head">
                                <h5>{data.name}</h5>
                                <h6>{data.work}</h6>
                                <p className="profle-rating mt-b mb-5">
                                    RANKING : <span>1/10</span>
                                </p>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        {/* <a href="#home" id="home-tab" data-toggle="tab" className="nav-link active" role="tab" aria-current="page" aria-controls="home">About</a> */}
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        {/* <a href="#profile" id="profile-tab" data-toggle="tab" className="nav-link" role="tab" aria-controls="profile">Timeline</a> */}
                                        <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Timeline</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="button" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work"></div>
                        </div>

                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>USER ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data._id}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data.name}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data.email}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Work/Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data.work}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>564</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Availablity</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 Months</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
