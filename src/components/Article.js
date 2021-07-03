import React from "react";

function Article(props){
    return (
        <div className="Article">
            <article key={props.blogStuff}>
                <h3>{props.blogStuff.title}</h3>
                <small>{props.blogStuff.date}</small>
                <p>{props.blogStuff.preview}</p>
            </article>
        </div>
    )
}

export default Article;