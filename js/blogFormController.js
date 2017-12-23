"use strict";

let model = require("./model");

let preview = document.getElementById("preview");


module.exports.activatePage = () => {
    disableForm();
    activatePreview();
    activateSubmitButton();
};

const activatePreview = () => {
    let content = document.getElementById("content");

    content.addEventListener("keyup", function(){
        preview.innerHTML = content.value;
    });
};

const activateSubmitButton = () => {
    document.getElementById("post-btn").addEventListener("click", () => {

        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let post = {};
        let currentTimestamp = Date.now();
        let date = new Date(currentTimestamp);
        let dateString = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;

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