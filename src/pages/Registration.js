import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { fire } from '../firebase/firebase-connection';

export default function Registration() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();
        let fnameErr, emailErr, pwdErr = true;
        if (fname === "") {
            document.getElementById("fnameErr").innerHTML = "Please enter the firstname";
        } else {
            document.getElementById("fnameErr").innerHTML = "";
            fnameErr = false;
        }
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
        if ((fnameErr || emailErr || pwdErr) === true) {
            alert("Please fill all the details");
        } else {
            fire.auth().createUserWithEmailAndPassword(email, password).then(() => {
                alert("Your form has been successfully registered!..");
            })
        }
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
    }
    return (
        <>
            <div className='col-md-5 form-section'>
                <h1>Registration Form</h1>
                <form>
                    <div className='form-group'>
                        <label htmlFor="fname">Firstname</label>
                        <input type="text" placeholder='Firstname' id='fname' className='form-control' value={fname} onChange={(e) => setFname(e.target.value)} />
                        <div id='fnameErr' className='errorMsg'></div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="lname">Lastname</label>
                        <input type="text" placeholder='Lastname' id='lname' className='form-control' value={lname} onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='Email' id='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div id='emailErr' className='errorMsg'></div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pwd">Password</label>
                        <input type="password" placeholder='Password' id='pwd' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div id='pwdErr' className='errorMsg'></div>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary' onClick={formSubmit}>Submit</button>
                    </div>
                    <Link to="/">Back to Home</Link>
                </form>
            </div>
        </>
    )
}
