import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import FaethemLogo from "../../assets/FaethemAI-logo.svg";
import TextPointer from "../../components/TextPointer";



export default function HomePageUpperContent() {
    const [isOpenSolution, setIsOpenSolution] = useState(false);
    const [solutions, setSolutions] = useState(["Solution 1", "Solution 2", "Solution 3"]);
    
    const navigate = useNavigate();
    function handleAccountClicked(){
        navigate("/account");
    }
   

    const handleSolutionClicked= ()=>{
        setIsOpenSolution(!isOpenSolution);
        alert("clicked");
    }

    const displaySolutionItem = solutions.map((item) =>
       {isOpenSolution && <TextPointer text={item} fontSize="20px"/>}
    )


    // const displaySolution = (
    //     <div className="homePageDropdown">
    //        <displaySolutionItem />
    //     </div>
    // );

    return(
        <div className="homePageUpperNavbar">
            <div className="homePageLogo">
                <img 
                    src={FaethemLogo}
                    alt="Faethem Logo"
                    className="faethem-logo-home" 
                />
            </div>
    
            
            <div className="homePageUpperTextContainer">
                {/* need to add dropdown icon */}
                {/* Planning to implement using AppIcon */}
                <ul className="homePageListNavbar">
                        <TextPointer 
                            text="Solutions" 
                            fontSize="20px"
                            onClick={handleSolutionClicked}
                        />
                        
                        <div className="diplayDropdownItem">
                            {isOpenSolution && displaySolutionItem}
                        </div>
                        
                        <TextPointer text="Resources" fontSize="20px"/>
                        <TextPointer text="Contact" fontSize="20px"/>
                </ul>
            
            </div>

            <div className="homePageUpperTextAccount">
                <TextPointer
                    text="Account"
                    onClick={handleAccountClicked}
                />
            </div> 
        </div>
    )

}