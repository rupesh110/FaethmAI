import React from "react";
import AppIcon from "./AppIcon";


const TextPointer = ({text, className, onClick, fontSize="17px", fontWeight, color="black", icon}) =>{

    const style={
        color: color,
        fontSize: fontSize,
        marginTop: "-20px",
        marginLeft:  "10px",   
        fontWeight: fontWeight,
        cursor: "pointer",
    }
   
    const Icon = icon && <AppIcon icon={icon}/>;

    return(
        <div>
         
            <div style={style} className={className} onClick= {onClick} >
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default TextPointer;