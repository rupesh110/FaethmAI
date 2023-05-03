import React from "react";
import { useNavigate } from "react-router-dom";

import FaethemLogo from "../assets/FaethemAI-logo.svg";
import FaethemHome from "../assets/FaethmHome.svg";

import TextTitle from "../components/TextTitle";
import TextInput from "../components/TextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { LoginComponent } from "./LoginPage/LoginComponent";


export default function PasswordPage() {
    const [copyRightText, privacyText, cookiesText, users, setUsers] = LoginComponent();

    const navigate = useNavigate();
    function handleLogin(){
        alert(`Password: ${users.password}`);
        navigate("/home");
    }
    return(
        <div className="loginContainer">

            <div className="leftSideContainer">
                <img 
                    src={FaethemLogo}
                    alt="Faethem Logo"
                    className="faethem-logo" 
                />
                <img 
                    src={FaethemHome}
                    alt="Faethem Home"
                    className="faethem-home"
                />
            </div> 

            <div className="rightSideContainer">
                <TextTitle 
                    className="welcomeText"
                    text="Welcome"
                    fontWeight={500}
                />
                <TextTitle
                    className="loginTextContinue"
                    text="Enter password to login in to your Faethem Account."
                    fontWeight={350}
                    fontSize="20px"
                />
                <div className="inputText">
                    <TextInput
                        text="Password"
                        placeholder="Password"
                        className="emailInput"
                        onChange={(e) => setUsers({password: e.target.value})}
                    />
                    <AppButton 
                        text="Login"
                        onClick={handleLogin}
                    />
                </div>
                
               <AppText 
                    className="copyRightText"
                    text={copyRightText}
                    color="#A6A6A6"
                    fontSize="15px"
                />
                <AppText 
                    className="copyRightText"
                    text={privacyText}
                    color="#A6A6A6"
                    fontSize="15px"
                />
                <AppText 
                    className="copyRightText"
                    text={cookiesText}
                    color="#A6A6A6"
                    fontSize="15px"
                />
                


            </div>
        </div>
    )
}
