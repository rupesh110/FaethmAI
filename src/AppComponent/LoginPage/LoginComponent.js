import React, {useState} from "react";

export function LoginComponent() {

    const [users, setUsers] = useState({email: "", password:""});

    const copyRightText = "© 2021 Faethem AI. All rights reserved.";
    
    const privacyText = (
        <span>
            By continuing, you agree to the Faethem{" "}
            <a href="https://www.faethm.ai/privacy" 
                style={{ color: "#00B5AC", textDecoration: "none" }} 
                target="_blank">
                Privacy Policy
            </a>. This site also uses cookies.
        </span>
    )

    const cookiesText = (
        <span>
            See our{" "} 
            <a href="https://f.hubspotusercontent30.net/hubfs/6540535/Information%20Security/FAETHM%20Cookie%20Policy.pdf" 
                style={{color:"#00B5AC", textDecoration: "none"}} 
                target="_blank">Cookies Policy 
            </a>{" "}for further information.
        </span>
    )
    return[
        copyRightText,
        privacyText,
        cookiesText, users, setUsers
    ];
}