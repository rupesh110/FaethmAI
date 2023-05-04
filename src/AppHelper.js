import React from "react";
import {Routes, Route, Router } from "react-router-dom";

import LoginPage from "./AppComponent/LoginPage";
import PasswordPage from "./AppComponent/PasswordPage";
import HomePage from "./AppComponent/HomePage";
import AccountPage from "./AppComponent/HomePageContent/AccountPage";
import Profile from "./AppComponent/HomePageNavBarDisplay/Profile";




export default function AppHelper() {
    return(
        //<LoginPage />
        // <PasswordPage />
       
            <Routes>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="/password" element={<PasswordPage />} /> */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
       
       
        
      
        // <HomePage />
    )
}