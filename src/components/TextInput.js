import React from "react";

const TextInput = ({placeholder, onChange, className}) =>{
    const style = {
        size: 30,
        borderRadius: 8,
        lineHeight: 2,
        width: 300,
        paddingLeft: 10,
        fontSize: 17,
    }

    return(
        <>
            <input 
                placeholder={placeholder}
                onChange={onChange}
                className={className}
                style={style}>

            </input>
        </>
    )

}

export default TextInput;