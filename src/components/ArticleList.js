import React from "react";
import Article from "./Article"

//console.log(blogData);

function ArticleList({blogArray}) {
    
    let array = []

    if(blogArray && blogArray.map){
        array = blogArray
    }

    const blogElements = array.map((post) => {
        return (<Article blogStuff = {post}/>)
    })

    return (
            <main>
                {blogElements}
            </main>
    )
}

export default ArticleList;