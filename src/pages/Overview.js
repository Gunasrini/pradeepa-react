import React, { useContext } from 'react';
import About from './ClassComponenent';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from './Hooks';
import Countries from './Countries';
import "./Overview.css"
import Products from './Products';
import Sidebar from './Sidebar';
import Header from './Header';
import Services from './Services';
import { DashboardCardInfo } from '../App';
import { fire } from '../firebase/firebase-connection';
import ReduxCounter from './Redux/ReduxCounter';
import ReduxAuth from './Redux/ReduxAuth';

export default function Overview(props) {
    const dashInfo = useContext(DashboardCardInfo);
    console.log(dashInfo);
    const myDashboardStyle = {
        color: "red",
        fontSize: "30px",
        textDecoration: "underline",
        textTransform: "uppercase",
        fontWeight: "bold"
    }
    return (
        <>
            <div className="w3-overlay w3-hide-large w3-animate-opacity" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>

            <div className="w3-main overview-section" style={{ marginLeft: "300px", marginTop: "43px" }}>
                <header className="w3-container" style={{ paddingTop: "22px" }}>
                    <h5 style={myDashboardStyle}><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
                </header>

                <div className="w3-row-padding w3-margin-bottom">
                    <div className="w3-quarter">
                        <div className="w3-container w3-red w3-padding-16">
                            <div className="w3-left"><i className="fa fa-comment w3-xxxlarge"></i></div>
                            <div className="w3-right">
                                <h3>{dashInfo.msgCount}</h3>
                            </div>
                            <div className="w3-clear"></div>
                            <h4>{dashInfo.msgText}</h4>
                        </div>
                    </div>
                    <div className="w3-quarter">
                        <div className="w3-container w3-blue w3-padding-16">
                            <div className="w3-left"><i className="fa fa-eye w3-xxxlarge"></i></div>
                            <div className="w3-right">
                                <h3>{dashInfo.viewCount}</h3>
                            </div>
                            <div className="w3-clear"></div>
                            <h4>{dashInfo.viewText}</h4>
                        </div>
                    </div>
                    <div className="w3-quarter">
                        <div className="w3-container w3-teal w3-padding-16">
                            <div className="w3-left"><i className="fa fa-share-alt w3-xxxlarge"></i></div>
                            <div className="w3-right">
                                <h3>{dashInfo.shareCount}</h3>
                            </div>
                            <div className="w3-clear"></div>
                            <h4>{dashInfo.shareText}</h4>
                        </div>
                    </div>
                    <div className="w3-quarter">
                        <div className="w3-container w3-orange w3-text-white w3-padding-16">
                            <div className="w3-left"><i className="fa fa-users w3-xxxlarge"></i></div>
                            <div className="w3-right">
                                <h3>{dashInfo.userCount}</h3>
                            </div>
                            <div className="w3-clear"></div>
                            <h4>{dashInfo.userText}</h4>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <Login />
                        <Registration />
                    </div> */}
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/countries">
                                <Header />
                                <Sidebar />
                                <Countries />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                    <div className='about-section'>
                        <About />
                        <Contact />
                        <ReduxCounter />
                        <ReduxAuth />
                        {
                            fire.auth().onAuthStateChanged(function (user) {
                                if (user) {
                                    return (
                                        <Services />
                                    )
                                } else {
                                    <p>Please login to view this content</p>
                                }
                            })
                        }
                        <Products />
                    </div>
                </div>
            </div>
        </>
    )
}
