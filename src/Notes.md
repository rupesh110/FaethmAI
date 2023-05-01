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
                        <li> 
                            <TextPointer 
                                text="Solutions" 
                                fontSize="20px"
                            />
                        </li>
                        <li> <TextPointer text="Resources" fontSize="20px"/></li>
                        <li> <TextPointer text="Contact" fontSize="20px"/></li>
                    </ul>
                   
                </div>

                <div className="homePageUpperTextAccount">
                    <TextPointer
                        text="Account"
                        onClick={handleAccountClicked}
                    />
                </div> 
            </div>