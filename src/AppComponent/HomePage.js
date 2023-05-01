import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import FaethemLogo from "../assets/FaethemAI-logo.svg";
import AppText from "../components/AppText";
import AppIcon from "../components/AppIcon";
import FaethemHome from "../assets/FaethemHomeContent.png";
import TextPointer from "../components/TextPointer";
import HomePageUpperContent from "./HomePageNavBarDisplay/HomePageUpperContent";



export default function HomePage() {
    const [departmentList, setDepartmentList] = useState(["Department strength","Visualization 1", "Visualization 2",  "Visualization 3"])
    const [employeesList, setEmployeesList] = useState(["Employees strength","Visualization 1", "Visualization 2",  "Visualization 3"])
  
    const displayDepartment = departmentList.map((item) =>
        <TextPointer text={item} color="White"/>
    )

    const displayEmployees = employeesList.map((item) =>
        <TextPointer text={item} color="White"/>
    )

    const navigate = useNavigate();
    function handleAccountClicked(){
        navigate("/account");
    }
    return(
        <div className="homePageContainer">
     
            {/* have divided the page into 3 sections
            1. upper navbar
            2. left navbar
            3. main content*/}

            {/* This one is the upper navbar  */}
            <HomePageUpperContent />
            <hr></hr>
            {/* This one includes the left navbar and the main content */}
            <div className="homePageMainContentSplit">

                {/* This is the left navbar */}
                <div className="homePageLeftNavbar">
                    <AppText 
                        text="Visualizations" 
                        fontSize="35px" 
                        fontWeight="bold"
                        color="White"
                    />
                    <AppText 
                        text="Departments" 
                        fontSize="20px" 
                        fontWeight="bold"
                        color="White"
                    />
                    {displayDepartment}
                    <AppText 
                        text="Employees" 
                        fontSize="20px" 
                        fontWeight="bold"
                        color="White"
                    />
                    {displayEmployees}
                </div>

                {/* This one is the main content */}
                <div className="homePageMainContent">
                    <div className="homePageText">
                        <AppText 
                            text="Welcome to Faethem"
                            fontSize="30px"
                            fontWeight="bold"
                        />
                        <AppText
                            text="Select a visualization to get started."
                            fontSize="20px"
                        />
                    </div>
                   
                    <img 
                        src= {FaethemHome}
                        className="homePageMainContentImage"
                    />
                </div>
            </div>
    
        </div>
    )
}