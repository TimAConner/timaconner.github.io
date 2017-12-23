"use strict";
const model = require('./model');
const view = require('./view');
const searchUtility = require('./searchUtility');

let currentPostIndex = 0;
let allPosts = [];
let selectedPosts = [];


module.exports.buildBlog = () => {
    model.fetchData("../json/blog-post.json").then(postObject => {
        let  posts = postObject.posts; 
        selectedPosts = posts.sort((a, b) => b.timestamp - a.timestamp);  
        allPosts = selectedPosts;    
        view.showBlog(selectPosts(0, 5), selectedPosts.length, 5);
        activateBlogButtons();
        // activateSearchDiv();
        searchUtility.activateSearchDiv({allArray: allPosts, selectedArray: selectedPosts}, function(arraysObject){
            selectedPosts = arraysObject.selectedArray;
            view.showBlog(selectPosts(0, 5, arraysObject), selectedPosts.length, 5);
        });
    });
};

const selectPosts = (startPost, endPost) => {
    return selectedPosts.slice(startPost, endPost);
};

const activateBlogButtons = () => {
    document.getElementById("main-output").addEventListener("click", function(){
        if(event.target.classList.contains("PostsPage")){
            view.clearMainOutput();
            view.showBlog(selectPosts(event.target.getAttribute("startPost"),  event.target.getAttribute("endPost")), selectedPosts.length, 5);
        }
    });
};