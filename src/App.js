import React from 'react';
import './App.css';
import Header from './pages/Header';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Registration from './pages/Registration';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from './pages/Countries';
import Products from './pages/Products';
import ReduxCounter from './pages/Redux/ReduxCounter';
import ReduxAuth from './pages/Redux/ReduxAuth';

export const DashboardCardInfo = React.createContext();


function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Registration />
                    </Route>
                    <Route exact path="/countries">
                        <Header />
                        <div className="w3-main overview-section" style={{ marginLeft: "300px", marginTop: "43px" }}>
                            <DashboardCardInfo.Provider value={{ name: 'india', percentage: '100%' }}>
                                <Countries />
                            </DashboardCardInfo.Provider>
                        </div>
                    </Route>
                    <Route exact path="/products">
                        <Header />
                        <div className="w3-main overview-section" style={{ marginLeft: "300px", marginTop: "43px" }}>
                            <DashboardCardInfo.Provider value={{ name: "Hi I am from the App component" }}>
                                <Products />
                            </DashboardCardInfo.Provider>
                        </div>
                    </Route>
                    <Route exact path="/overview">
                        <Header />

                        <DashboardCardInfo.Provider value={{
                            msgText: "Messages",
                            msgCount: "1000",
                            viewText: "Views",
                            viewCount: "99",
                            shareText: "Shares",
                            shareCount: "23",
                            userText: "Users",
                            userCount: "1950"
                        }}>
                            <Overview />
                        </DashboardCardInfo.Provider>

                    </Route>
                    <Route exact path="/redux">
                        <Header />
                        <div className="w3-main overview-section" style={{ marginLeft: "300px", marginTop: "43px" }}>
                            <DashboardCardInfo.Provider value={{ name: 'india', percentage: '100%' }}>
                                <div className='container p-5'>
                                    <ReduxCounter />
                                    <ReduxAuth />
                                </div>
                            </DashboardCardInfo.Provider>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>

            {/* <Overview msgText="Messages" msgCount="100" viewText="Views" viewCount="99" shareText="Shares" shareCount="23" userText="Users" userCount="1950" /> */}

            {/* <Sidebar />
      <Overview msgText="Messages" msgCount="52" viewText="Views" viewCount="99" shareText="Shares" shareCount="23" userText="Users" userCount="50" /> */}

        </>
    );
}

export default App;
