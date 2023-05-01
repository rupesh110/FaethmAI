import React from "react";

//include button hover

const AppButton = ({text, className, onClick, size="30"}) =>{
    return(
        <button 
            className={className}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default AppButton;