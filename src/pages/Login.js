import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { fire } from '../firebase/firebase-connection';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let emailErr, pwdErr = true;
        if (email === "") {
            document.getElementById("emailErr").innerHTML = "Please enter the email";
        } else {
            document.getElementById("emailErr").innerHTML = "";
            emailErr = false;
        }
        if (password === "") {
            document.getElementById("pwdErr").innerHTML = "Please enter the password";
        } else {
            document.getElementById("pwdErr").innerHTML = "";
            pwdErr = false;
        }
        if ((emailErr || pwdErr) === true) {
            alert("Please fill all the details");
        } else {
            fire.auth().signInWithEmailAndPassword(email, password).then(() => {
                history.push("/overview");
            })
        }
        setEmail("");
        setPassword("");
    }
    return (
        <div className='col-md-5 form-section'>
            <h1>Login Form</h1>
            <form>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id='emailErr' className='errorMsg'></div>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="password" className='form-control' placeholder='Password'
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div id='pwdErr' className='errorMsg'></div>
                </div>
                <button onClick={handleSubmit} className='btn btn-primary'>Login</button>

                <div className='mt-4'>
                    <h4>OR</h4>
                    <Link to='/register'><button className='btn btn-info'>Create New Account</button></Link>
                </div>

            </form>
        </div>
    )
}
