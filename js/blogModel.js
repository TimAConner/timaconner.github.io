"use strict";

// Load blog posts into data.
const loadBlog = (callBackFunction) => {
    let xhr = new XMLHttpRequest();
    let data;
    
    //Activate on load to populate data with blog posts
    xhr.addEventListener("load", function() {
        data = JSON.parse(this.responseText);
        callBackFunction(data.posts);
    });

    xhr.open("GET", "../json/blog-post.json");
    xhr.send();
};

// Load blog into data and get posts.
module.exports.getPosts = (callBackFunction) => {
    return loadBlog(callBackFunction);
};