import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import FaethemLogo from "../../assets/FaethemAI-logo.svg";
import TextPointer from "../../components/TextPointer";



export default function HomePageUpperContent() {
    const [isOpenSolution, setIsOpenSolution] = useState(false);
    const [solutions, setSolutions] = useState(["Solution 1", "Solution 2", "Solution 3"]);
    
    const [isOpenResource, setIsOpenResource] = useState(false);
    const[Resources, setResources] = useState(["Resource 1", "Resource 2", "Resource 3"]);

    const [isOpenContact, setIsOpenContact] = useState(false);
    const [contact, setContact] = useState(["Contact 1", "Contact 2", "Contact 3"]);

    const [isAccountClicked, setIsAccountClicked] = useState(false);
    const [account, setAccount] = useState(["Profile", "Manage Account", "Logout"]);
    const navigate = useNavigate();
    function handleAccountClicked(){
       // navigate("/account");
        setIsAccountClicked(!isAccountClicked);
    }
   
    
    const handleSolutionClicked= ()=>{
        setIsOpenSolution(!isOpenSolution);
        setIsOpenContact(false);
        setIsOpenResource(false);
    }

    const handleResourceClicked= ()=>{
        setIsOpenResource(!isOpenResource);
        setIsOpenSolution(false);
        setIsOpenContact(false);
    }

    const handleContactClicked= ()=>{
        setIsOpenContact(!isOpenContact);
        setIsOpenSolution(false);
        setIsOpenResource(false);
    }

    const displaySolutions = () => {
        if (isOpenSolution) {
          return (
            <div className="homePageDropdown">
              {solutions.map((item) => (
                <TextPointer text={item} fontSize="17px" />
              ))}
            </div>
          );
        }
      };
     

    const displayResources = () => {    
        if(isOpenResource){
            return (
                <div className="homePageDropdown">
                    {Resources.map((item) => (
                        <TextPointer text={item} fontSize="17px" />
                    ))}
                </div>
            );
        };
    }

    const displayContact = () => {
        if(isOpenContact){
            return (
                <div className="homePageDropdown">
                    {contact.map((item) => (
                        <TextPointer text={item} fontSize="17px" />
                    ))}
                </div>                   
            );
        };
    }

    const displayAccount = () => {
        if(isAccountClicked){
            return (
                <div className="homePageDropdownAccount">
                    {account.map((item) => (
                        <TextPointer text={item} fontSize="17px" />
                    ))}
                </div>
            );                   
        };
    }

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
                        <div className="dropdownTextDisplay">
                            <TextPointer 
                                text="Solutions" 
                                fontSize="20px"
                                onClick={handleSolutionClicked}
                            />
                            {displaySolutions()}
                        </div>


                        <div className="dropdownTextDisplay">
                            <TextPointer 
                                text="Resources" 
                                fontSize="20px"
                                onClick={handleResourceClicked}
                            />
                            {displayResources()}
                        </div>
                        <div className="dropdownTextDisplay">
                            <TextPointer 
                                text="Contact" 
                                fontSize="20px"
                                
                                onClick={handleContactClicked}
                            />
                            {displayContact()}
                        </div>
                </ul>
            
            </div>

            <div className="homePageUpperTextAccount">
                <div className="dropdownTextDisplay">
                    <TextPointer
                        text="Account"
                        onClick={handleAccountClicked}
                        fontSize="20px"
                    />
                    {displayAccount()}
                </div>
               
               
            </div> 
        </div>
    )

}