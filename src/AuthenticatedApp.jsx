import React from "react";
import './AuthenticatedApp.scss';
import {Navigate, Route, Routes} from 'react-router-dom'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from './Components/Pages/Home/Home';
import Profile from './Components/Pages/Profile/Profile';
import Settings from "./Components/Pages/Settings/Settings";

function AuthenticatedApp() {
    return <>
        <div className="base">
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Navigate to={'home'} />}/>
                    <Route path='/home' element={<Home />} />
                    <Route path='/profile/:id' element={<Profile />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </>
}

export default AuthenticatedApp;