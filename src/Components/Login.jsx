import React, { useState } from "react";
import { Alert } from "react-bootstrap"
import Home from "./Home"

function Login() {
    const [namelog, setNamelog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [emaillog, setEmaillog] = useState("");

    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let name = localStorage.getItem("Name").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        


        if (!namelog || !passwordlog || !emaillog) {
            setFlag(true);
            console.log("Empty")
        } else if (namelog !== name || passwordlog !== pass || emaillog !== mail) {
            setFlag(true)
        } else {
            setHome(!home);
            setFlag(false);
        }


    }
    return (
        <div>
            {home ? (
                <form onSubmit={handleLogin}>
                    <h3> Login </h3>

                    <div className='form-group'>
                        <label> Name</label>
                        <input type="" className='form-control' placeholder="Enter Full Name" onChange={(event) => setNamelog(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label> Email</label>
                        <input type="mail" className='form-control' placeholder="Enter Email" onChange={(event) => setEmaillog(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className='form-control' placeholder="Enter Password" onChange={(event) => setPasswordlog(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block"> Login</button>
                    {flag && (
                        <Alert color="primary" variant="warning">
                            Please Fill Correct Information.
                        </Alert>
                    )}
                </form>
            ) : (
                <Home />
            )}
        </div>

    )
}

export default Login