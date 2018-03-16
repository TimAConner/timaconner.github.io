"use strict";

let model = require("./model");

let preview = document.getElementById("preview");

let view = require("./view");

let posts = [];
let selectedPost;

module.exports.activatePage = () => {
    populateBlogList();
    activateBlogList();
    disableForm();
    activatePreview();
    activateSubmitButton();
};

const setPreviewHtml = (value) => {
    preview.innerHTML = value;
};


const activatePreview = () => {
    let content = document.getElementById("content");

    content.addEventListener("keyup", function(){
        setPreviewHtml(content.value);
    });
};


const activateSubmitButton = () => {
    document.getElementById("post-btn").addEventListener("click", () => {

        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let post = {};
        let currentTimestamp;
        let dateString;
        if(selectedPost != null){
            currentTimestamp = selectedPost.timestamp;
            dateString = `${selectedPost.date}`;
        } else {
            currentTimestamp = Date.now();
            let date = new Date(currentTimestamp);
            dateString = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        }

        post = {
            title:  document.getElementById("title").value,
            timestamp:  currentTimestamp,
            date: dateString,
            content: document.getElementById("content").value
        };
        
        model.savePost(post);

        alert("Success!"); // jshint ignore:line
    });
};

const disableForm = () => {
    document.getElementById("blog-form").addEventListener("submit",  (e) => {
        e.preventDefault();
    });
};


const activateBlogList = () => {
    let postList = document.getElementById("blog-list");
    postList.addEventListener("click", (event) => {
        if(event.target.classList.contains("old-blog-post")){
            let timestamp = event.target.getAttribute("timestamp"); 
            selectedPost = posts.find(x => x.timestamp === timestamp);
            setBlogFormContents(selectedPost);
        }
    });
};

const populateBlogList = () => {
    model.fetchData("../json/blog-post.json").then(postObject => {
        posts = postObject.posts; 
        view.showBlogList(posts);
    });
};

const setBlogFormContents = () => {
    document.getElementById('title').value = selectedPost.title;
    document.getElementById('content').value = selectedPost.content;
    setPreviewHtml(selectedPost.content);
};