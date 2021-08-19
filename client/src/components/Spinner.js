import React from 'react'

const Spinner = () => {
    const style = {
        width: "36vh",
        height: "36vh"
    }

    const styleDiv = {
        height: "100vh",
        width: "100vw"
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={styleDiv}>
            <div className="spinner-border text-secondary" style={style} role="status"></div>
        </div>
    )
}

export default Spinner
