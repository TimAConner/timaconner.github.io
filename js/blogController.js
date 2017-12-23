"use strict";
const model = require('./model');
const view = require('./view');

let currentPostIndex = 0;
let allPosts = [];
let currentPosts = [];


module.exports.buildBlog = () => {
    model.fetchData("../json/blog-post.json").then(postObject => {
        let  posts = postObject.posts; 
        currentPosts = posts.sort((a, b) => b.timestamp - a.timestamp);  
        allPosts = currentPosts;    
        view.showBlog(selectPosts(0, 5), currentPosts.length, 5);
        activateBlogButtons();
        activateSearchDiv();
    });
};

const selectPosts = (startPost, endPost) => {
    return currentPosts.slice(startPost, endPost);
};

const activateBlogButtons = () => {
    document.getElementById("main-output").addEventListener("click", function(){
        if(event.target.classList.contains("PostsPage")){
            view.clearMainOutput();
            view.showBlog(selectPosts(event.target.getAttribute("startPost"),  event.target.getAttribute("endPost")), currentPosts.length, 5);
        }
    });
};

const activateSearchDiv = () => {
    let searchBox = document.getElementById("search-box");
    searchBox.addEventListener("keyup", (e) => {
        let term = searchBox.value.toLowerCase();
        if(term.length >= 3){
            currentPosts = allPosts.filter((post) => (post.title.toLowerCase().indexOf(term) !== -1 || post.content.toLowerCase().indexOf(term) !== -1));
            view.clearMainOutput();
            view.showBlog(selectPosts(0, 5), currentPosts.length, 5);
        } else {
            view.clearMainOutput();
            currentPosts = allPosts;
            view.showBlog(selectPosts(0, 5), currentPosts.length, 5);
        }
    });
};

