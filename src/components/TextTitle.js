import React from "react";

const TextTitle = ({text, className, fontSize="50px", fontWeight, color="black"}) =>{
    const style = {
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight
    }

    return(
        <span className={className} style={style}>
            <p>{text}</p>
        </span>
    )

}

export default TextTitle;