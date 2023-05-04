import React from "react";

//include button hover

const AppButton = ({text, className, onClick, size="20"}) =>{
    return(
        <button 
            className={className}
            onClick={onClick}
            size= {size}
        >
            {text}
        </button>
    )
}

export default AppButton;