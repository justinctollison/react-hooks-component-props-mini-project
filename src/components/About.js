import React from "react";

function About(props){
    return (
        <div className="About">
            <aside>
                <img src={props.blogImg} defaultValue="https://via.placeholder.com/215" alt="blog logo"></img>
                <p>{props.blogAbout}</p>
            </aside>
        </div>
    )
}

export default About;