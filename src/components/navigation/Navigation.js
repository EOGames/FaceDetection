import React from "react";
import '../../Custom.css';

const Navigation = function()
{
    return(
        <nav style={{display:"flex", justifyContent:"flex-end"}}>
            <p id="signOut"> Sign Out</p>
        </nav>
    );
}

export default Navigation;