import React from "react";

function Header(props){
    return (
        <div className="Header">
            <h1>{props.blogName}</h1>
        </div>
    )
}

export default Header;