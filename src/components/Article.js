import React from "react";

function Article({blogStuff}){

    console.log()

    return (
            <article key={blogStuff.id}>
                <h3>{blogStuff.title}</h3>
                <small>{blogStuff.date}</small>
                <p>{blogStuff.preview}</p>
            </article>
    )
}

export default Article;