import React from "react";

function About({blogAbout, blogImg = "https://via.placeholder.com/215"}){

    return (
            <aside>
                <img src={blogImg} alt="blog logo"></img>
                <p>{blogAbout}</p>
            </aside>
    )
}

export default About;