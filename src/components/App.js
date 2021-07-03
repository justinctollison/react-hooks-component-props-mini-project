import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

//console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <About blogImg = {blogData.image} blogAbout = {blogData.about}/>
      <Header blogName = {blogData.name}/>
      <ArticleList />
    </div>
  );
}

export default App;
