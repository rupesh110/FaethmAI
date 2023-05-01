import React from "react";
import { useNavigate } from "react-router-dom";

import FaethemLogo from "../assets/FaethemAI-logo.svg";
import FaethemHome from "../assets/FaethmHome.svg";

import TextTitle from "../components/TextTitle";
import TextInput from "../components/TextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

export default function PasswordPage() {
    const copyRightText = "© 2021 Faethem AI. All rights reserved.";
    const privacyText = (
        <span>
            By continuing, you agree to the Faethem{" "}
            <a href="https://www.faethm.ai/privacy" 
                style={{ color: "#00B5AC", textDecoration: "none" }} 
                target="_blank">
                Privacy Policy
            </a>. This site also uses cookies.
        </span>
    )


    const cookiesText = (
        <span>
            See our{" "} 
            <a href="https://f.hubspotusercontent30.net/hubfs/6540535/Information%20Security/FAETHM%20Cookie%20Policy.pdf" 
                style={{color:"#00B5AC", textDecoration: "none"}} 
                target="_blank">Cookies Policy 
            </a>{" "}for further information.
        </span>
    )

    const navigate = useNavigate();
    function handleLogin(){
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
