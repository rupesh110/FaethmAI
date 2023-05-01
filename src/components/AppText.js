import React from "react";
import AppIcon from "./AppIcon";


const AppText = ({text, className, onClick,  fontSize="17px", fontWeight, color="black", icon}) =>{

    const style={
        color: color,
        fontSize: fontSize,
        marginTop: "-20px",
        fontWeight: fontWeight,
    }
    return(
        <div>
         
            <div style={style} className={className}  onClick= {onClick}>
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default AppText;