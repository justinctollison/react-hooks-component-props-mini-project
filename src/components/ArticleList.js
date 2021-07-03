import React from "react";
import Article from "./Article"
import blogData from "../data/blog";

//console.log(blogData);

function ArticleList() {
    
    const blogArray = blogData.posts

    const blogElements = blogArray.map((posts) => {
        return <Article blogStuff = {posts}/>
    })

    return (
        <div className="ArticleList">
            <main>
                {blogElements}
            </main>
        </div>
    )
}

export default ArticleList;