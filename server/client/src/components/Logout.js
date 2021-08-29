import React, { useEffect } from 'react'
import Spinner from './Spinner';
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';
import { Helmet } from "react-helmet-async";

const Logout = () => {
    const { state, dispatch } = React.useContext(UserContext);
    const history = useHistory();
    const logout = () => {
        fetch("/logout", {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include"
        }).then(res => {
            dispatch({ type: "USER", payload: false })
            history.push("/signin", { replace: true });
            if (res.status !== 200) throw new Error(res.message)
        }).catch(err => alert(`An error occured: ${err}`))
    }

    useEffect(() => {
        logout();
    }, [])
    return (
        <>
            <Helmet>
                <title>Logging you out....</title>
            </Helmet>
            <Spinner />
        </>
    )
}

export default Logout
