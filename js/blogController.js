"use strict";
const model = require('./model');
const view = require('./view');

let currentPostIndex = 0;

let posts = [];

module.exports.buildBlog = () => {
    model.fetchData("../json/blog-post.json").then(postObject => {
        posts = postObject.posts; 
        posts = posts.sort((a, b) => b.timestamp - a.timestamp);  
        view.showBlog(selectPosts(0, 5), posts.length, 5);
        activateBlogButtons();
    });
};

const selectPosts = (startPost, endPost) => {
    return posts.slice(startPost, endPost);
};

const activateBlogButtons = () => {
    document.getElementById("main-output").addEventListener("click", function(){
        if(event.target.classList.contains("PostsPage")){
            clearPage();
            view.showBlog(selectPosts(event.target.getAttribute("startPost"),  event.target.getAttribute("endPost")), posts.length);
        }
    });
};

const clearPage = () => {
    document.getElementById("main-output").innerHTML = "";
};