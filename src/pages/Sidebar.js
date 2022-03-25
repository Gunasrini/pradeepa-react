import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from './Countries';
import Overview from './Overview';

export default function Sidebar() {
    return (
        <>
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: "300px" }} id="mySidebar"><br />
                <div className="w3-container w3-row">
                    <div className="w3-col s4">
                        <img src="/assets/images/avatar.png" className="w3-circle w3-margin-right" style={{ width: "46px" }} />
                    </div>
                    <div className="w3-col s8 w3-bar">
                        <span>Welcome, <strong>Mike</strong></span><br />
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
                        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
                    </div>
                </div>
                <hr />
                <div className="w3-container">
                    <h5>Dashboard</h5>
                </div>
                <div className="w3-bar-block sidebar-menu">
                    <Link to="/overview">Overview</Link>
                    <Link to="/products">Products</Link>
                    {/* <Link to="/login">Login</Link>
                    <Link to="/register">Registration</Link> */}
                    <Link to="/countries">Countries</Link>
                    <Link to="/redux">Redux Counter</Link>
                </div>
            </nav>
        </>
    )
}
