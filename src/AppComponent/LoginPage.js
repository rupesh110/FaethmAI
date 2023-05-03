import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import FaethemLogo from "../assets/FaethemAI-logo.svg";
import FaethemHome from "../assets/FaethmHome.svg";

import TextTitle from "../components/TextTitle";
import TextInput from "../components/TextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { LoginComponent } from "./LoginPage/LoginComponent";





export default function LoginPage() {
    const [copyRightText, privacyText, cookiesText, users, setUsers] = LoginComponent();

   
    
    // setUsers({email: "yeasfasdhfg s"})
 

    const navigate = useNavigate();
    function handleContinue(){
        alert(`Email: ${users.email}`);
        navigate("/password");
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
                    text="Login in to your Faethem Account."
                    fontWeight={350}
                    fontSize="20px"
                />
                <div className="inputText">
                    <TextInput
                        text="Email"
                        placeholder="Email"
                        className="emailInput"
                        onChange={(e) => setUsers({email: e.target.value})}
                    />
                    <AppButton 
                        text="Continue"
                        onClick={handleContinue}
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
